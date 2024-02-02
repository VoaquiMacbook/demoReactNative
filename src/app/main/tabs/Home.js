import {
  StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, TextInput, ScrollView, FlatList, SafeAreaView
} from 'react-native'
import React, { useState, useEffect, useCallback, useContext } from 'react'
import AxiosInstance from '../../authen/helpers/AxiosInstance';
import ItemProduct from '../../item/ItemProduct';
import { AppContext } from '../../AppContext';
const Home = (props) => {
  // const
  const { navigation } = props;
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(useContext(AppContext));
  const [numberCart, setNumberCart] = useState(cart.length);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await AxiosInstance().get('/categories');
        setCategories(response.categories);
        setSelectedCategories(response.categories[0]);
      } catch (error) {
        console.log('Lấy danh sách danh mục lỗi', error);
      }
    }
    getCategories();
  }, []);

  useCallback(useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await AxiosInstance().get(`/products?category=${selectedCategories?._id}`);
        console.log('Products response:', response.products); // Log the products array
        setProducts(response.products);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    }

    getProducts();
  }, [selectedCategories]));

  const find = (text) => {
    setSearch(text);
    if (text === '') {
      setIsSearch(false);
      setFilteredProducts(products);
    } else {
      setIsSearch(true);
      const filtered = products.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }
  const selectCategory = (item, index) => {
    // console.log(index);
    setSelectedCategories(item);
    setSelected(index);
    setProducts([]);
    // console.log(item?._id);
    // setProducts(item.products);
  }


  const renderCategories = ({ item }) => (
    <View style={styles.item}>
      <View style={{ backgroundColor: '#141414', width: 142, height: 235, padding: 10, borderRadius: 25, shadowColor: 'black', shadowRadius: 45, shadowOpacity: 10 }}>
        <View>
          <Image
            style={styles.avt_container}
          >{item.image}</Image>
        </View>
        <View style={styles.txt_container_item}>
          <Text style={styles.txt_itemM} >{item.name}</Text>
          <Text style={styles.txt_item}>{item.postion}</Text>
        </View>
        <View style={styles.horizontal}>
          <Text style={[styles.txt_itemM, styles.flex]}>{item.rice}</Text>
          <TouchableOpacity >
            <Image style={styles.btn_v} source={require('../../../assets/images/btn_add.png')}></Image>
          </TouchableOpacity>
        </View>

      </View>
    </View>

  );

  const renderItemCategories = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity style={styles.mg_end} onPress={() => setSelected(item._id)}>
        <Text style={{ color: selected === item._id ? '#D17842' : 'gray' }}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={[styles.horizontal_seeall]}>
        <TouchableOpacity 
         onPress={() => navigation.navigate('Setting')}
        style={[styles.flex]}>
          <Image style={styles.btn_v} source={require('../../../assets/images/btn_v.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Personal')}>
          <Image source={require('../../../assets/images/img_avt_s.png')}></Image>
        </TouchableOpacity>
      </View>
      <Text style={styles.txt_tilte} >Find the best coffee for you</Text>
      <View style={styles.search}>
        {!isSearch &&
          <Image style={styles.imgSearch} source={require('../../../assets/images/ic_search.png')} />}
        <TextInput
          style={styles.textInput}
          placeholder='Find Your Coffee...'
          placeholderTextColor={'#52555A'}
          onChangeText={find}
          value={search}
        />
      </View>
      <View style={styles.listLoai}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (

            <TouchableOpacity
              key={index}
              style={styles.itemLoai}
              onPress={() => selectCategory(item, index)}>

              <Text style={[styles.txtLoai, index === selected && styles.txtLoaiSeleted]}>
                {item?.name}
              </Text>

              {index == selected &&
                <View style={styles.selectedLoai}></View>
              }
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View>
        <FlatList
          data={products}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ItemProduct
              navigation={navigation}
              product={item}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Text style={styles.textCoffeeBean}>Coffee beans</Text>
      <View>
        <FlatList
          data={products}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ItemProduct
              navigation={navigation}
              product={item}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

    </View>

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',

  },
  // flex
  flex: {
    flex: 1,
  },
  // horizontal row
  horizontal: {
    flexDirection: 'row',
  },
  // custom see all
  txt_seeall: {
    fontStyle: 'italic',
    fontWeight: '500',
    fontSize: 14,
    alignSelf: 'center'
  },
  horizontal_seeall: {
    flexDirection: 'row',
    paddingEnd: 20,
    paddingTop: 0,
    paddingStart: 10,

  },
  // btn v
  btn_v: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  // custom tilte
  txt_tilte: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    width: 195,
    height: 72,
    marginVertical: 14,
    paddingStart: 10,
  },
  // custom scv
  scv_txt: {
    color: 'gray',
    fontSize: 14,
    lineHeight: 20,
  },
  // custom mg_end
  mg_end: {
    marginEnd: 18,
    marginVertical: 15,
  },
  // custom New Items
  avt_container: {
    borderRadius: 20,
    backgroundColor: 'black',
    width: 121,
    height: 121,
    shadowOpacity: 20,
    shadowRadius: 50,
    shadowColor: 'white',
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  txt_item: {
    fontSize: 10,
    width: 120,
    color: 'white',
    marginVertical: 3,

  },
  txt_itemM: {
    color: 'white',
    marginVertical: 5,
  },
  txt_container_item: {
    width: '80%',
    height: 65,
  },

  // custom input serach
  imgSearch: {
    marginTop: 13,
    marginStart: 18,
    width: 18,
    height: 18,
  },
  textInput: {
    marginStart: 19,
    color: '#52555A',
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  search: {
    width: '90%',
    height: 45,
    backgroundColor: '#141921',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    marginStart: 10,
  },
  // custom loai
  txtLoaiSeleted: {
    color: '#D17842',
    fontFamily: 'Poppins',
    fontSize: 14,
  },
  txtLoai: {
    color: '#52555A',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedLoai: {
    width: 8,
    height: 8,
    backgroundColor: '#D17842',
    borderRadius: 4,
  },
  itemLoai: {
    width: 'auto',
    marginHorizontal: 9,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:10,
  },
  listLoai: {
  
  },
  // custom CoffeeBean
  textCoffeeBean: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },


})
// { marginStart: 10, marginEnd: 5, shadowOpacity: 40, width: '10%' }