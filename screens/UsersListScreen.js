import React, { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet } from "react-native";
import firebase from "../database/firebase";
import { ListItem, Avatar } from "react-native-elements";

const UsersListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];

      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone,
        });
      });
      // console.log(users);
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        title="Create User"
        onPress={() => navigation.navigate("UserCreate")}
      />

      {users.map((users) => {
        return (
          <ListItem
            key={users.id}
            bottomDivider
            onPress={() =>
              navigation.navigate("UserDetail", {
                userId: users.id,
              })
            }
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://reactnativeelements.com/img/avatar/avatar--photo.jpg",
              }}
            />
            <ListItem.Content>
              <ListItem.Title>{users.name}</ListItem.Title>
              <ListItem.Subtitle>{users.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UsersListScreen;

const styles = StyleSheet.create({});
