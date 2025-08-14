import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import postsData from "../assets/data/posts.json";
import PostItem from "../components/postItem/PostItem";
import SearchBar from "../components/searchBar/SearchBar";
import useDebounce from "../hooks/useDebounce";
import { PostItemProps } from "@/types/postTypes";

const TOTAL_POSTS = 10;

export default function FeedScreen() {
     const [searchText, setSearchText] = useState("");
     const debouncedSearch = useDebounce(searchText, 300);

     const [displayedPosts, setDisplayedPosts] = useState<PostItemProps[]>(postsData.slice(0, TOTAL_POSTS));
     const [page, setPage] = useState(1);
     const [loadingMore, setLoadingMore] = useState(false);

     const filteredPosts = postsData.filter(
          (post) =>
               post.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
               post.description.toLowerCase().includes(debouncedSearch.toLowerCase())
     );

     useEffect(() => {
          setDisplayedPosts(filteredPosts.slice(0, TOTAL_POSTS));
          setPage(1);
     }, [debouncedSearch]);

     const loadMore = () => {
          if (loadingMore) return;
          if (displayedPosts.length >= filteredPosts.length) return;

          setLoadingMore(true);
          setTimeout(() => {
               const nextPage = page + 1;
               const newPosts = filteredPosts.slice(0, nextPage * TOTAL_POSTS);
               setDisplayedPosts(newPosts);
               setPage(nextPage);
               setLoadingMore(false);
          }, 500);
     };

     return (
          <View className="flex-1 bg-gray-100">
               <SearchBar value={searchText} searchPost={setSearchText} />
               <FlatList
                    data={displayedPosts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                         <PostItem
                              key={item.id}
                              id={item.id}
                              title={item.title}
                              description={item.description}
                              image={item.image}
                              posted_date={item.posted_date}
                         />
                    )}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={loadingMore ? <ActivityIndicator size="small" className="my-3" /> : null}
               />
          </View>
     );
}
