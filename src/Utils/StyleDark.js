import { StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";

export const styleD = StyleSheet.create({
    mediumText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(20),
        color: '#E1E1E1',
        paddingVertical: ms(20),
        alignSelf: 'center',
        flexWrap: 'wrap',
        letterSpacing: ms(3)
    },
    mediumBold: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: ms(18),
        color: 'rgba(7, 28, 0, 0.83)',
        paddingVertical: ms(10),
        alignSelf: 'center',
        flexWrap: 'wrap'
    },
    mediumBlackText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: ms(14),
        color: '#E1E1E1',
        flexWrap: 'wrap'
    },
    lightText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(12),
        color: '#959595',
        flexWrap: 'wrap'
    },
    greySmallText: {
        fontFamily: 'Montserrat-Italic',
        fontSize: ms(10),
        color: 'grey',
        paddingTop: ms(5),
        paddingBottom: 0,
        flexWrap: 'wrap'
    },
    blackSmallText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(10),
        color: '#959595',
        textAlign: 'justify',
        paddingTop: ms(5),
        paddingBottom: 0,
        flexWrap: 'wrap'
    },
    normalSmallText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(12),
        color: '#E1E1E1',
        flexWrap: 'wrap'
    },
    mediumSmallText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: ms(12),
        color: '#E1E1E1',
        flexWrap: 'wrap'
    },
    whiteSmallText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(10),
        color: 'black',
        textAlign: 'justify',
        flexWrap: 'wrap'
    },
    container: {
        paddingHorizontal: ms(20),
        paddingVertical: ms(5)
    },
    cardTop: {
        borderBottomLeftRadius: ms(30),
        borderBottomRightRadius: ms(30),
        paddingHorizontal: ms(20),
        marginVertical: 0,
        marginTop: 0,
        marginBottom: ms(15),
        backgroundColor: '#161B22'
    },
    cardBottom: {
        borderTopLeftRadius: ms(30),
        borderTopRightRadius: ms(30),
        paddingHorizontal: ms(20),
        marginVertical: 0,
        marginTop: ms(15),
        marginBottom: 0,
        backgroundColor: '#161B22'
    },
    card: {
        borderRadius: ms(30),
        paddingHorizontal: ms(20),
        marginVertical: 0,
        marginHorizontal: 0,
        backgroundColor: '#161B22'
    },
    cardBlack: {
        marginVertical: 0,
        marginHorizontal: ms(5),
        backgroundColor: '#E1E1E1',
        borderRadius: ms(10),
    },
    outline: {
        borderColor: '#E1E1E1',
        borderWidth: ms(1),
        borderRadius: ms(15),
        padding: ms(5)
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: ms(5)
    },
    wrapEven: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    rowTop: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginRight: ms(10)
    },
    rowEnd: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        height: ms(50),
        width: ms(50),
        margin: ms(5)
    },
    qr: {
        height: ms(100),
        width: ms(100),
    },
    modal: {
        backgroundColor: 'white',
        padding: ms(20),
        borderRadius: ms(10),
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        marginTop: '150%'
    },
})