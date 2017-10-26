import React from 'react';
import PropTypes from 'prop-types';
import {Body, Button, ListItem, Text, Thumbnail, Icon, Grid, Row, Col} from "native-base";

const ProductListItem = ({ product: { name, description, shortDescription, price, } }) =>
  <ListItem>
    <Thumbnail square large source={{ uri: `https://lorempixel.com/80/80/food/?${name}` }} />
    <Body>
      <Grid>
        <Row>
          <Col>
            <Grid>
              <Row>
                <Col style={{ height: 'auto' }}>
                  <Text>{name}</Text>
                  <Text style={{ fontStyle: 'italic' }}>{shortDescription}</Text>
                </Col>
              </Row>
              <Row>
                <Col style={{ alignSelf: 'flex-end' }}>
                  <Text>NOK {price},-</Text>
                </Col>
              </Row>
            </Grid>
          </Col>
          <Col style={{ width: 'auto', alignSelf: 'center' }}>
            <Button title="Add to cart"  onPress={() => alert(`Added ${name} to cart!`)}>
              <Icon name="cart" />
            </Button>
          </Col>
        </Row>
      </Grid>
    </Body>
  </ListItem>;

ProductListItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductListItem;