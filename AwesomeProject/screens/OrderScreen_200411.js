import React, { Component } from "react";
import {
    Alert,
    AsyncStorage,
    ActivityIndicator,
    Image,
    Modal,
    RefreshControl,
    ScrollView,
    StyleSheet,
    View,
    WebView,
} from "react-native";
import {
    Avatar,
    Button,
    Card,
    Input,
    Icon,
    Text,
    Overlay,
} from "react-native-elements";
 
//import { place_order, get_product_detail } from "../services/Api";
 
export default class OrderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            refreshing: false,
            order_quantity: 0,
            product_id: 0,
            selected_product: undefined,
            total_amount: 0,
            isModalVisible: false,
            approval_url: "",
        };
    }
 
    // this is the main function to display a page
    render() {
        const selected_product = this.state.selected_product;
 
        // following means that data is not ready
        // will display a ActivityIndicator (loading animation)
        let content_view;
        if (this.state.isLoading) {
            contentView = (
                <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator />
            </View>
            );
        }
 
        // If not loading
        if (selected_product === undefined) {
            // If selected product is empty, show no product message
            contentView = (
                <View>
                    <Text> No product selected! </Text>
                    <Text> Please select a product from list first! </Text>
                </View>
            );
        } else {
            // If selected product is not empty
            // display detail
            contentView = (
 
                <Card title={selected_product.name}>
                    <Avatar
                        large
                        source={{ uri: selected_product.picture }}
                        activeOpacity={0.7}
                    />
                    <Text>Description: {selected_product.description}</Text>
                    <Text>Quantity: {selected_product.quantity}</Text>
                    <Text>Discount: {selected_product.discount}</Text>
                    <Text>price: {selected_product.price}</Text>
 
                    <Input
                        label="Input your need:"
                        containerStyle={{
                            borderWidth: 2, // size/width of the border
                            borderColor: "lightgrey", // color of the border
                            marginVertical: 10
                        }}
                        keyboardType="numeric"
                        value={`${this.state.order_quantity}`}
                        onChangeText={this.inputQty}
                        clearTextOnFocus={true} //only work on IOS
                    />
                    <Text>Total Amount: {this.state.total_amount}</Text>
 
                    <Button
                        title="ORDER"
                        icon={{ name: "payment" }}
                        backgroundColor="#03A9F4"
                        buttonStyle={{ borderRadius: 0, marginTop: 100 }}
                        onPress={this.onPressSubmit}
                    />
                </Card>
            );
        }
 
        // render Order Screen
        return (
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: "center",
                    paddingTop: 20,
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.performRefresh}
                    />
                }>
 
                <Overlay
                    isVisible={this.state.isModalVisible}
                    onRequestClose={this.onCloseOverlay}
                    onBackdropPress={this.onCloseOverlay}
                >

                    <WebView source={{ uri: this.state.approval_url }} />

                </Overlay>
                {contentView}
 
            </ScrollView>
        );
    }
}