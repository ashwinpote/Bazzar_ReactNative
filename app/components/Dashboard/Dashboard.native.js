import React from 'react';
import DashboardBase from './DashboardBase';
import { ScrollView, View, Text, Header } from 'react-native';
import Button from 'react-native-button';
import styles from '../../native/styles';

export default class DashboardMobile extends DashboardBase{
    constructor(props, state){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
             <View style={{ backgroundColor: "yellow"}}>
                 <Text>Bazzar Dashboard</Text>
             </View>
             <ScrollView style={{ backgroundColor: "pink"}}>
                 <View>{
                    this.state.list.map((obj) => {
                        return (<Text>{obj.itemname}</Text>);
                    })}
                </View>
                <Button className="btn btn-outline-primary" onPress={this.handleClick}>Add Item</Button>
            </ScrollView>
            <View style={{ backgroundColor: "red" }}>
                <Text>Footer</Text>
            </View>
        </View>
        )
    }
}