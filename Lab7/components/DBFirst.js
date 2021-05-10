import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import * as SQLite from "expo-sqlite";
import styles from './styles'

function openDatabase() {
  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

function Products({ done: doneShopping, onPressItem }) {
  const [Products, setProducts] = React.useState(null);

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from items where done = ?;`,
        [doneShopping ? 1 : 0],
        (_, { rows: { _array } }) => setProducts(_array)
      );
    });
  }, []);

  if (Products === null || Products.length === 0) {
    return null;
  }

  return (
    <View style={styles.db.con}>
      {Products.map(({ id, done, value }) => (
        <TouchableOpacity
          key={id}
          onPress={() => onPressItem && onPressItem(id)}
          style={{
            backgroundColor: done ? "#DADADA" : "#006164",
            borderColor: "black",
            padding: 8,
            marginBottom: '2%'
          }}
        >
          <Text 
            style={{ color: done ? "black" : "white", 
                    textDecorationLine: done ? 'line-through' : ''}}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function FirstDB({navigation}) {
  const [text, setText] = React.useState(null);
  const [forceUpdate, forceUpdateId] = useForceUpdate();

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
  }, []);

  const add = (text) => {    
    if (text === null || text === "") {
      return alert('Wprowadź tekst!');
    }

    db.transaction(
      (tx) => {
        tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      forceUpdate
    );
  };

  return (
    <View style={styles.db.container}>
      <Text style={styles.db.shopping}>Lista zakupów</Text>
        <>
          <View style={styles.db.flexRow}>
            <TextInput
              onChangeText={(text) => setText(text)}
              onSubmitEditing={() => {
                add(text);
                setText(null);
              }}
              placeholder="➕ Dodaj coś do listy zakupów"
              style={styles.db.input}
              value={text}
            />
          </View>
          <TouchableOpacity
              onPress={() =>
                db.transaction(
                  (tx) => {
                    tx.executeSql(`delete from items;`)
                    alert('Wyczyszono listę');
                  },
                  null,
                  forceUpdate
                )
              }
              style={styles.home.button}
            >
            <Text style={styles.home.text}>❌ Usuń wszystko z listy zakupów</Text>
          </TouchableOpacity>
          <ScrollView style={styles.db.shoppingList}>
            <View style={styles.db.col}>
              <View style={{width: '48%'}}> 
              <Text style={styles.db.txt}>Lista zakupów</Text>
                <Products
                  key={`forceupdate-todo-${forceUpdateId}`}
                  done={false}
                  onPressItem={(id) =>
                    db.transaction(
                      (tx) => {
                        tx.executeSql(`update items set done = 1 where id = ?;`, [id])
                      },
                      null,
                      forceUpdate
                    )
                  }
                />
              </View>
              <View style={{width: '48%'}}> 
              <Text style={styles.db.txt}>✔️ W koszyku</Text>
                <Products
                  done
                  key={`forceupdate-done-${forceUpdateId}`}                  
                  onPressItem={(id) =>
                    db.transaction(
                      (tx) => {
                        tx.executeSql(`delete from items where id = ?;`, [id])
                      },
                      null,
                      forceUpdate                      
                    )                  
                  }
                />
              </View>
            </View>
          </ScrollView>
        </>
    </View>
  );
}