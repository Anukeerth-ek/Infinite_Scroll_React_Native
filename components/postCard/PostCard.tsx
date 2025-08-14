import { PostCardProps } from "@/types/postTypes";
import React from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components/native";

const Card = styled(View)`
     background-color: white;
     margin-vertical: 8px;
     margin-horizontal: 16px;
     border-radius: 12px;
     overflow: hidden;
     elevation: 4;
 
`;

const PostImage = styled(Image)`
     width: 100%;
     height: 176px;
`;

const Title = styled(Text)`
     font-size: 18px;
     font-weight: bold;
     padding: 8px;
`;

const Description = styled(Text)`
     font-size: 14px;
     color: #4b5563;
     padding-horizontal: 8px;
     padding-bottom: 8px;
`;

function PostCardComponent({ id, title, description, image }: PostCardProps) {
     return (
          <Card>
               <PostImage
                    source={{
                         uri:
                              image ||
                              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBONeVJ9JzPf27lZl6I7-K8F_WjhPx8DY43wKmj9IaN2xlF0ocQQ0NTU&s",
                    }}
                    resizeMode="cover"
               />
               <Title numberOfLines={1} ellipsizeMode="tail">{title}</Title>
               <Description numberOfLines={2} ellipsizeMode="tail">
                    {description}
               </Description>
          </Card>
     );
}

export const PostCard = React.memo(
  PostCardComponent,
  (prev, next) =>
    prev.id === next.id &&
    prev.title === next.title &&
    prev.description === next.description &&
    prev.image === next.image &&
    prev.posted_date === next.posted_date
);
