import React, {} from "react";
import { View,Text, Dimensions} from 'react-native'
import { colors } from "../../config/theme/colors";


export default function Splash(){
    const {width, height} = Dimensions.get("window")
    return(
        <View style={{flex: 1, backgroundColor: colors.secondary, justifyContent: "center", alignItems: "center"}}>
            <Text style={{
                color: colors.terciary,
                fontSize: 50
            }}>LEIA+</Text>

        </View>
    )
}