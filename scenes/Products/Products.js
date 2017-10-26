import React from 'react';
import {Body, Content, Icon, List, ListItem, Text, Thumbnail} from "native-base";
import Container from "../../components/general/Container/Container";
import ProductListItem from "./ProductListItem";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    }
  }

  static navigationOptions = {
    tabBarLabel: 'Produkter',
    tabBarIcon: () => <Icon name='Basket'/>,
  };

  componentDidMount() {
    fetch('http://192.168.1.185:4000/product')
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.state.products.map((product, index) => <ProductListItem product={product} key={index} />)}
          </List>
        </Content>
      </Container>
    )
  };
}

export default Products;