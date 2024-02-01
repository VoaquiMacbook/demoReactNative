import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
  const USERS = [{
    "id": 1,
    "name": "Sonsing",
    "email": "csturte0@barnesandnoble.com",
    "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423516596_1622755301798686_6688950499091215330_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=8SMr-0daZVIAX_rZc0A&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDDHy_KNaSkMApt3b8xR9EWoPEArHSz2bry7jtnSKqhdQ&oe=65BB58F8",
    "postion": "Research Associate",
    "rice": "$7.30"
}, {
    "id": 2,
    "name": "Ronstring",
    "email": "lfeatherstone1@com.com",
    "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423538209_1622755318465351_1230407908410425052_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=aQit8qaysnsAX_o9W6T&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAoIKG07gguymuZeQaXvteGTrls7eKO8g9GGr1Yg7ZC_w&oe=65BB9AC8",
    "postion": "Administrative Assistant III",
    "rice": "$9.17"
}, {
    "id": 3,
    "name": "Tempsoft",
    "email": "qpenright2@samsung.com",
    "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423557520_1622755321798684_1431897259310686444_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=LFO9cS_grUMAX-dvb7-&_nc_oc=AQkoKT9RyDjMnbUhlSrx55dWYheWUq7pFOVHvQqovGI_tIPHtZ7L17CQYPHE5Xs8QM8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDKLwm5xZWFfJ4TTIAbrL3MC2pChCz592SGAS6iRQgWHQ&oe=65BB2995",
    "postion": "Senior Sales Associate",
    "rice": "$5.74"
}, {
    "id": 4,
    "name": "Zontrax",
    "email": "astirman3@ox.ac.uk",
    "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423515722_1622755395132010_8741546126443131823_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=FgWHg8ohtjEAX_PAVWK&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDXmSqpIQbMm1rqfkhiP1O8f11HIeHLyoK1F8fxjCi9aw&oe=65BA491B",
    "postion": "Librarian",
    "rice": "$0.34"
}, {
    "id": 5,
    "name": "Span",
    "email": "dsterley4@wp.com",
    "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423584529_1622755408465342_7305113225419697574_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=EbgGg47ouDEAX9ojl2Y&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfC6_pRObxWAwp_MFCd0XdhepgGVBxi_bCoYAKECubwGuQ&oe=65BB58C5",
    "postion": "Product Engineer",
    "rice": "$8.99"
}, {
    "id": 6,
    "name": "Fix San",
    "email": "nablott5@creativecommons.org",
    "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423516596_1622755301798686_6688950499091215330_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=8SMr-0daZVIAX_rZc0A&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDDHy_KNaSkMApt3b8xR9EWoPEArHSz2bry7jtnSKqhdQ&oe=65BB58F8",
    "postion": "Associate Professor",
    "rice": "$2.46"
}, {
    "id": 7,
    "name": "Alpha",
    "email": "ppaeckmeyer6@ehow.com",
    "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423538209_1622755318465351_1230407908410425052_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=aQit8qaysnsAX_o9W6T&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAoIKG07gguymuZeQaXvteGTrls7eKO8g9GGr1Yg7ZC_w&oe=65BB9AC8",
    "postion": "Social Worker",
    "rice": "$7.22"
}, {
    "id": 8,
    "name": "Tres-Zap",
    "email": "bdoddemeade7@usa.gov",
    "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423557520_1622755321798684_1431897259310686444_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=LFO9cS_grUMAX-dvb7-&_nc_oc=AQkoKT9RyDjMnbUhlSrx55dWYheWUq7pFOVHvQqovGI_tIPHtZ7L17CQYPHE5Xs8QM8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDKLwm5xZWFfJ4TTIAbrL3MC2pChCz592SGAS6iRQgWHQ&oe=65BB2995",
    "postion": "Biostatistician II",
    "rice": "$3.04"
}, {
    "id": 9,
    "name": "Subin",
    "email": "cducket8@ameblo.jp",
    "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423515722_1622755395132010_8741546126443131823_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=FgWHg8ohtjEAX_PAVWK&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDXmSqpIQbMm1rqfkhiP1O8f11HIeHLyoK1F8fxjCi9aw&oe=65BA491B",
    "postion": "Research Nurse",
    "rice": "$7.73"
}, {
    "id": 10,
    "name": "Sonsing",
    "email": "gmalster9@macromedia.com",
    "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423584529_1622755408465342_7305113225419697574_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=EbgGg47ouDEAX9ojl2Y&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfC6_pRObxWAwp_MFCd0XdhepgGVBxi_bCoYAKECubwGuQ&oe=65BB58C5",
    "rice": "$3.27"
}, {
    "id": 11,
    "name": "Tres-Zap",
    "email": "sandressa@qq.com",
    "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423516596_1622755301798686_6688950499091215330_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=8SMr-0daZVIAX_rZc0A&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDDHy_KNaSkMApt3b8xR9EWoPEArHSz2bry7jtnSKqhdQ&oe=65BB58F8",
    "postion": "Human Resources Manager",
    "rice": "$2.12"
}, {
    "id": 12,
    "name": "Prodder",
    "email": "tcamoisb@scientificamerican.com",
    "photo": "http://dummyimage.com/226x100.png/cc0000/ffffff",
    "postion": "Human Resources Assistant II",
    "rice": "$7.07"
}, {
    "id": 13,
    "name": "Daltfresh",
    "email": "jtrowlerc@msu.edu",
    "photo": "http://dummyimage.com/216x100.png/cc0000/ffffff",
    "postion": "Dental Hygienist",
    "rice": "$0.71"
}, {
    "id": 14,
    "name": "Stim",
    "email": "deasund@guardian.co.uk",
    "photo": "http://dummyimage.com/136x100.png/dddddd/000000",
    "postion": "VP Sales",
    "rice": "$2.81"
}, {
    "id": 15,
    "name": "Redhold",
    "email": "tleape@washington.edu",
    "photo": "http://dummyimage.com/233x100.png/ff4444/ffffff",
    "postion": "Compensation Analyst",
    "rice": "$9.50"
}]
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={{backgroundColor:'#2B2B2C', width:149, height:245, padding:10, borderRadius:20}}> 
        <View>
          <Image
            style={styles.avt_container}
            source={{ uri: item.photo }} />
        </View>
        <View style={styles.txt_container_item}>
          <Text style={styles.txt_itemM} >{item.name}</Text>
          <Text style={styles.txt_item}>{item.postion}</Text>
        </View>

        <Text style={styles.txt_itemM}>{item.rice}</Text>
      </View>

    </View>);
  const [selectedTab, setSelectedTab] = useState('All');

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.horizontal_seeall]}>
        <TouchableOpacity style={[styles.flex]}>
          <Image style={styles.btn_v} source={require('../../../assets/images/btn_v.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/images/img_avt_s.png')}></Image>
        </TouchableOpacity>
      </View>


      <Text style={styles.txt_tilte} >Find the best coffee for you</Text>

      <Image style={{ width: 330, height: 45, alignSelf: 'center' }} source={require('../../../assets/images/input_home.png')}></Image>
      <SafeAreaView style={styles.scrollView}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}

        >
          <TouchableOpacity style={styles.mg_end} onPress={() => handleTabPress('All')}>
            <Text style={{ color: selectedTab === 'All' ? '#D17842' : 'gray' }}> All </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mg_end} onPress={() => handleTabPress('Cappuccino')}>
            <Text style={{ color: selectedTab === 'Cappuccino' ? '#D17842' : 'gray' }}> Cappuccino </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mg_end} onPress={() => handleTabPress('Espresso')}>
            <Text style={{ color: selectedTab === 'Espresso' ? '#D17842' : 'gray' }}> Espresso </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mg_end} onPress={() => handleTabPress('Americano')}>
            <Text style={{ color: selectedTab === 'Americano' ? '#D17842' : 'gray' }}> Americano </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mg_end} onPress={() => handleTabPress('Macchiato')}>
            <Text style={{ color: selectedTab === 'Macchiato' ? '#D17842' : 'gray' }}> Macchiato </Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
      <View>
        <FlatList
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={USERS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <View>
        <FlatList
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={USERS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>




    </View>

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',

  },
  // flex
  flex: {
    flex: 1,
  },
  // custom see all
  txt_seeall: {
    fontStyle: 'italic',
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'center'
  },
  horizontal_seeall: {
    flexDirection: 'row',
  },
  // btn v
  btn_v: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  // custom tilte
  txt_tilte: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    width: 195,
    height: 72,
    marginVertical: 28,
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
    marginVertical: 30,
  },
  // custom New Items
  avt_container: {
    borderRadius: 5,
    backgroundColor: 'gray',
    width: 126,
    height: 126,
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
    width: 100,
    textAlign: 'center',
    color: 'white',
  },
  txt_itemM: {
    color: 'white',
  },
  txt_container_item: {
    width: '80%',
    alignItems: 'center',
    height: 50,
  }


})
// { marginStart: 10, marginEnd: 5, shadowOpacity: 40, width: '10%' }