import React from "react";
import { TextInput, View } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";

type SearchBarProps = {
     value: string;
     searchPost: (text: string) => void;
};

const Container = styled(View)`
     flex-direction: row;
     align-items: center;
     background-color: #ffffff;
     padding: 10px 10px 10px 18px;
     margin-horizontal: 16px;
     margin-vertical: 8px;
     border-radius: 9999px;
     elevation: 3;
     shadow-color: #000;
     shadow-opacity: 0.1;
     shadow-radius: 3px;
     shadow-offset: 0px 1px;
`;

const Input = styled(TextInput)`
     font-size: 16px;
`;

export default function SearchBar({ value, searchPost }: SearchBarProps) {
     return (
          <Container>
               <Icon name="search" size={20} color="#666" />
               <Input placeholder="Search posts..." value={value} onChangeText={searchPost} />
          </Container>
     );
}
