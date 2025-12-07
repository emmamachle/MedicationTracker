import React, { Suspense } from "react";
import {Stack, Tabs} from "expo-router"
import {StyleSheet, Text} from "react-native"
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SQLiteProvider } from "expo-sqlite";
//import updateSchema from "../../data/schemaMigration"
//import { RecipeProvider, useRecipeContext } from "../../contexts/recipeContext";
//import { ThemeProvider, useThemeContext} from "../../contexts/themeContext";

const styles = StyleSheet.create({
  headerRight:{
    marginRight: 20,
    fontSize: 24,
    color: '#fff',    
  }
});

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "hotpink",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#ffffff",
          },
          headerTintColor: "#ffffff", // back arrow & icons color
          headerTitleAlign: "center",
          headerRight: () => (
            <MaterialCommunityIcons
              name="pill"
              size={24}
              color="#ffffff"
              style={styles.headerRight}
            />
          ),
        }}
      >

      <Stack.Screen
        name="index"
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="entry/view"
        options={{ title: "View Entry" }}
      />
      <Stack.Screen
        name="entry/create"
        options={{ title: "Create New Entry" }}
      />
      <Stack.Screen
        name="medication/create"
        options={{ title: "Create New Medication" }}
      />
      </Stack>
    </>
  );
}

// async function updateDbIfNeeded(db: any) {

//   try{
//     const row: any = await db.getFirstAsync('PRAGMA user_version');
//     const currentDbVersion = (row && typeof row.user_version === 'number') ? row.user_version : 0;

//     const DATABASE_VERSION = 4;

//     if (currentDbVersion >= DATABASE_VERSION){
//       return;
//     } 

//     await updateSchema({currentDbVersion, db});

//   }catch(err){

//   }finally{

//   }

// }
