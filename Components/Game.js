import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ToastAndroid, Modal, TextInput,Button } from 'react-native'
import { changeModalVis, changePlayer, changePsequence, changeTextStyle, changeUnclickable, colorChange, increaseScore, pressedButton, reset, setName, showButton } from '../actions/gameActions'
import { useSelector, useDispatch } from 'react-redux'
import { saveScore } from '../actions/leaderboardsActions'

let sequence = []
let stopGame=false
let showFlag=true

const colors = { "red": "red", "yellow": "gold", "green": "green", "blue": "blue" }

const Game = ({navigation}) => {

    const dispatch = useDispatch()

    const {
        name,
        modalVis,
        score,
        simonSequence,
        playerSequence,
        show,
        playing,
        unclickable,
        pressed,
        textStyle,
        activeColor
    } = useSelector(state => state.gameReducer)


    //#region Effects
    useEffect(() => {
        if (pressed) {
            ToastAndroid.showWithGravity("Ready?", ToastAndroid.SHORT, ToastAndroid.TOP);
            ToastAndroid.showWithGravity("GO!", ToastAndroid.SHORT, ToastAndroid.TOP);
            setTimeout(() => { StartGame() }, 5000)
        }
        else {

        }

    }, [pressed])

    useEffect(() => {
        if ((unclickable == true && playing == "your") || (unclickable == false && (playerSequence.length == sequence.length))) {
            let counter = 0
            for (let i = 0; i < playerSequence.length; i++) {
                if (playerSequence[i] != sequence[i]) {
                    shouldShow()
                    dispatch(reset())
                    stopGame=true
                    break
                }
                if (playerSequence[i] == sequence[i]) {
                    counter++
                }
            }
            if (!stopGame) {
                dispatch(increaseScore(counter))
                dispatch(changePsequence([]))
                dispatch(changePlayer("Simon's"))
                StartGame()
            }
        }
    }, [unclickable])

    useEffect(() => {

        if(playerSequence.length<sequence.length)
        {
            for(let i=0;i<playerSequence.length;i++)
            {
                if(playerSequence[i]!=sequence[i])
                {
                    dispatch(reset())
                    stopGame=true
                    showFlag=true
                    break
                }
            }
        }

        if (playerSequence.length == sequence.length) {

            dispatch(changeUnclickable(true))
            //setUnclickable(true)
        }
    }, [playerSequence.length])
    //#endregion


    const StartGame = () => {
        stopGame=false
        dispatch(changeUnclickable(true))
        const choice = Math.floor(Math.random() * 4) + 1

        sequence.push(choice)
        for (let i = 0; i < sequence.length; i++) {
            switch (sequence[i]) {
                case 1://red
                    {
                        console.log("in red")
                        dispatch(colorChange({ "red": "#FF00AA", "yellow": "gold", "green": "green", "blue": "blue" }))
                        break;
                    }

                case 2://yellow
                    {
                        console.log("in yellow")
                        dispatch(colorChange({ "red": "red", "yellow": "yellow", "green": "green", "blue": "blue" }))
                        break;
                    }

                case 3://green
                    {
                        console.log("in green")
                        dispatch(colorChange({ "red": "red", "yellow": "gold", "green": "#52FF00", "blue": "blue" }))
                        break;
                    }

                case 4://blue
                    {
                        console.log("in blue")
                        dispatch(colorChange({ "red": "red", "yellow": "gold", "green": "green", "blue": "aqua" }))
                        break;
                    }
            }
            setTimeout(() => { dispatch(colorChange(colors)) }, 1500)
        }
        setTimeout(() => { dispatch(changePlayer("your")) }, 1500)
        dispatch(changePsequence([]))
        dispatch(changeUnclickable(false))
        
    }

    const shouldShow = () => {
        
        if (showFlag) {
            dispatch(changeTextStyle({ display: "none" }))
            dispatch(showButton({}))
            showFlag=false
        }
        else {
            
            dispatch(changeTextStyle({ color: "white", fontSize: 20 }))
            dispatch(showButton({
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                borderRadius: 5,
                height: "45%"
            }))
        }
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.info} >
                <Text style={styles.text}>Simon Says</Text>
                <Text style={styles.text} >{"\n"} Score: {score}</Text>
                <Text style={styles.text} >{"\n"} It's {playing} turn</Text>
                <TouchableOpacity style={show} onPress={() => {
                    
                    
                    shouldShow()
                    dispatch(pressedButton(true))
                }} >
                    <Text style={textStyle} >Start</Text>
                </TouchableOpacity>
            </View>
            <View style={{ display: "flex", flex: 3 }} >
                <View style={styles.btnSection}>
                    <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} disabled={unclickable} style={styles.btnOpacity} onPress={() => { const temp = [...playerSequence, 1]; dispatch(changePsequence(temp)) /*setPlayerSequence(temp)*/; console.log("pressed red") }}>
                        <View style={[styles.btn, { backgroundColor: activeColor["red"] }]} ></View>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={unclickable} style={styles.btnOpacity} onPress={() => { const temp = [...playerSequence, 2]; dispatch(changePsequence(temp)); console.log("pressed yellow") }}>
                        <View style={[styles.btn, { backgroundColor: activeColor["yellow"] }]} ></View>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnSection}>
                    <TouchableOpacity disabled={unclickable} style={styles.btnOpacity} onPress={() => { const temp = [...playerSequence, 3]; dispatch(changePsequence(temp)); console.log("pressed green") }}>
                        <View style={[styles.btn, { backgroundColor: activeColor["green"] }]} ></View>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={unclickable} style={styles.btnOpacity} onPress={() => { const temp = [...playerSequence, 4]; dispatch(changePsequence(temp)); console.log("pressed blue") }}>
                        <View style={[styles.btn, { backgroundColor: activeColor["blue"] }]} ></View>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal onRequestClose={() => {  dispatch(changeModalVis(false)) }}  visible={modalVis} animationType="slide">
                <View style={{display:"flex", flex:3,justifyContent:"center",alignItems:"center"}} >
                    <Text>Name: </Text>
                    <TextInput 
                        style={{borderColor:"black",borderWidth:1}}
                        onChangeText={(text) => {  dispatch(setName(text)) }}
                        value={name}
                    />
                    <Text>{"\n"} Score: {score+"\n"} </Text>
                    <Button title='save score' onPress={()=>{const obj={name:name,score:score};dispatch(changeModalVis(false));dispatch(saveScore(obj));navigation.navigate("Leaderboards")}} ></Button>
                </View>
            </Modal>
        </View >
    )
}

export default Game


const styles = StyleSheet.create({
    wrapper: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    info: {
        display: "flex",
        flex: 1,

    },
    text: {
        fontStyle: "italic",
        fontSize: 20
    },
    btnSection: {
        display: "flex",
        flexDirection: "row",
        flex: 2,
        width: "100%",
        //backgroundColor:"orange",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    btn: {
        borderRadius: 5,
        height: "50%",
        width: "75%"
    },
    btnOpacity: {
        display: "flex",
        flex: 2,
        alignItems: "center",
        justifyContent: "space-evenly"
    }
})