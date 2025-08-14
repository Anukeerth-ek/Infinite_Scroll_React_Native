import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import styled from "styled-components/native";
import postsData from "../assets/data/posts.json";
import { PostCard } from "../components/postCard/PostCard";
import SearchBar from "../components/searchBar/SearchBar";
import useDebounce from "../hooks/useDebounce";
import { PostCardProps } from "@/types/postTypes";
import Icon from "react-native-vector-icons/FontAwesome";


const TOTAL_POSTS = 10;

const Container = styled.View`
     flex: 1;
     background-color: #f3f4f6;
     margin-top: 18px;
`;

const Header = styled.View`
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     padding: 16px 20px;
     background-color: #f1f1f1;
     border-bottom-width: 1px;
     border-bottom-color: #e5e7eb;
`;

const TitleRow = styled.View`
     flex-direction: row;
     align-items: center;
`;

const Title = styled.Text`
     font-size: 20px;
     font-weight: 700;
     color: #111827;
     margin-right: 6px;
`;

const Loader = styled(ActivityIndicator)`
     margin-vertical: 12px;
`;


export default function FeedScreen() {
     const [searchText, setSearchText] = useState("");
     const debouncedSearch = useDebounce(searchText, 300);

     const [displayedPosts, setDisplayedPosts] = useState<PostCardProps[]>(postsData.slice(0, TOTAL_POSTS));
     const [page, setPage] = useState(1);
     const [loadingMore, setLoadingMore] = useState(false);

     const filteredPosts = useMemo(() => {
          return postsData.filter(
               (post) =>
                    post.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                    post.description.toLowerCase().includes(debouncedSearch.toLowerCase())
          );
     }, [debouncedSearch]);

     useEffect(() => {
          setDisplayedPosts(filteredPosts.slice(0, TOTAL_POSTS));
          setPage(1);
     }, [debouncedSearch]);

     const loadMore = useCallback(() => {
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
     }, [loadingMore, displayedPosts.length, filteredPosts, page]);

     return (
          <Container>
               <Header>
                    <TitleRow>
                         <Title>Frontend Dev Feed</Title>
                    </TitleRow>
                    <Icon name="caret-down" size={18} color="#374151" />
               </Header>

               <SearchBar value={searchText} searchPost={setSearchText} />

               <FlatList
                    data={displayedPosts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                         <PostCard
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
                    ListFooterComponent={loadingMore ? <Loader size="small" /> : null}
                    initialNumToRender={5}
                    removeClippedSubviews
                    windowSize={5}
               />
          </Container>
     );
}
