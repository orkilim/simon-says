import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'


const Leaderboards=({navigation})=>{

    const {topPlayers}=useSelector(state => state.leaderboardsReducer)

    const dispatch = useDispatch()

    return(
        <View style={{display:"flex",flex:2,justifyContent:"center",alignItems:"center"}} >
            {
                topPlayers?(
                    topPlayers.map((player,index)=>{
                        return(
                            <View key={index} >
                                <Text>Player: {player.name+"\n"}</Text>
                                <Text>Score: {player.score+"\n\n"}</Text>
                            </View>
                        )
                    })
                ):(<View><Text>No Champions Yet</Text></View>)
            }
            <Button title='Start New Game' onPress={()=>{navigation.navigate("Game")}} ></Button>
        </View>
    )

}

export default Leaderboards