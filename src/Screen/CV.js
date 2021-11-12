import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, ScrollView, Linking, Image } from 'react-native'
import { Divider, Card } from 'react-native-elements'
import { ms } from 'react-native-size-matters'
import { styleL } from '../Utils/StyleLight'
import { styleD } from '../Utils/StyleDark'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from 'react-native-modal'
import Clipboard from '@react-native-clipboard/clipboard'
import { useSelector } from 'react-redux'
import GlobalReducer from '../Store/globalReducer'

const DATA = [
    {
        id: 1,
        company: 'Glints Academy',
        position: 'React Native Mobile Developer Trainee',
        duration: 'August 2021 - December 2021',
        desc: [
            {
                title: 'React Native Stack Lead for mobile application "Shuttle"',
                detail: [
                    'Build a bus ordering application in 4 weeks using React Native as framework and JavaScript as programming language.',
                    'Implemented Redux-Saga and Axios library for fetching the API.',
                    'Easier Google Sign In with Firebase.',
                    'Adapted UI/UX throughout the scrum process for better user experience.'
                ]
            },
            {
                title: 'React Native Developer for mobile application "Movie Review"',
                detail: [
                    'Build a movie review application using React Native as framework and JavaScript as programming language in 2 weeks.',
                    'Implemented Axios library for fetching the API.'
                ]
            }]
    },
    {
        id: 2,
        company: 'Bank Central Asia',
        position: 'Bank Teller, Marketer',
        duration: 'July 2019 - July 2021',
        desc: [
            {
                detail: [
                    'Explored various customer needs through conversation and provided the most fitting service.',
                    'Engaged with up to fifty diverse customers a day, including when we could not speak the same language.',
                    'Achieved 98% satisfaction rate for focus, speed, attitude, and correct service offered at the latest monthly survey.',
                    'Increased insurance sales and successfully helped branch office to reach target during difficult selling environment of coronavirus pandemic.'
                ]
            }
        ]
    },
    {
        id: 3,
        company: 'Freelance',
        position: 'Film Crew',
        duration: '2018 - 2019',
        desc: [
            {
                title: 'Production Crew',
                detail: [
                    'Managed project logistics effectively within a tight timeline and limited budget.'
                ]
            },
            {
                title: 'Make Up and Costume Crew',
                detail: [
                    'Made ripped mouth SFX make up and acquired the necessary costumes.'
                ]
            }]
    }
]

const PORTO = [
    {
        id: 1,
        name: 'Shuttle',
        sub: `Glints Academy Final Project \nOct - Nov 2021 (4 weeks)`,
        desc: 'Application to help customers browse and book bus trips from different bus providers.',
        appLink: 'https://bit.ly/3F2CVVj',
        repo: 'https://bit.ly/30960PM',
        qr: require('../Assets/Images/shuttle-qr.png'),
        qrDark: require('../Assets/Images/shuttle-light.png')
    },
    {
        id: 2,
        name: 'Movie Review',
        sub: 'Glints Academy Mini Project \nSept - Oct 2021 (2 weeks)',
        desc: 'Application that allows users to review and see other users’ reviews of movies from many different genres.',
        appLink: 'https://bit.ly/3wyloBj',
        repo: 'https://bit.ly/3F9QMJl',
        qr: require('../Assets/Images/moviereview-qr.png'),
        qrDark: require('../Assets/Images/moviereview-light.png')
    },
]

export default function CV() {
    const darkMode = useSelector(state => { return state.GlobalReducer.darkMode })

    const [sumShow, setSumShow] = useState(true)
    const [techShow, setTechShow] = useState(true)
    const [sortNew, setSortNew] = useState(true)
    const [isVisible, setIsVisible] = useState(false);
    const [showContact, setShowContact] = useState(true)

    const toggleModal = () => {
        setIsVisible(!isVisible);
    };

    const theme = darkMode ? styleD : styleL
    const iconColor = darkMode ? 'white' : 'black'

    const Item = ({ company, position, duration, desc }) => {
        const [pressed, setPressed] = useState(true)

        return (
            <TouchableOpacity onPress={() => setPressed(!pressed)}>
                <Card containerStyle={[theme.card, { marginBottom: ms(10) }]}>
                    <Text style={theme.mediumBlackText}>{position}</Text>
                    <Text style={theme.normalSmallText}>{company}</Text>
                    <Text style={theme.greySmallText}>{duration}</Text>
                    {desc.map((e, i) => {
                        return (
                            <View key={`desc-key-${i}`}>
                                <View style={{ flexDirection: 'row', paddingVertical: ms(5), width: ms(260) }}>
                                    {e.title ?
                                        <View style={theme.rowTop}>
                                            <AntDesign name={pressed ? 'downsquare' : 'rightsquare'} size={ms(14)} color={iconColor} style={{ marginTop: ms(3), marginRight: ms(5) }} />
                                            <Text style={theme.mediumSmallText}>{e?.title}</Text>
                                        </View> : null
                                    }
                                </View>
                                {pressed ?
                                    e.detail.map((item, index) => {
                                        return (
                                            <View key={`detail-key-${index}`} style={theme.rowTop}>
                                                <AntDesign name='caretright' color={iconColor} size={ms(10)} style={{ paddingVertical: ms(5), paddingLeft: ms(5), paddingRight: ms(10) }} />
                                                <View>
                                                    <Text style={theme.lightText}>{item}</Text>
                                                </View>
                                            </View>
                                        )
                                    }) : null
                                }
                            </View>
                        )
                    })}
                </Card>
            </TouchableOpacity >
        )
    }

    const renderItem = ({ item }) => (
        <Item company={item.company} position={item.position} duration={item.duration} desc={item.desc} />
    )

    return (
        <SafeAreaView style={{ flex: 1 }} style={{ backgroundColor: darkMode ? '#0D1117' : 'white' }}>
            <ScrollView>
                <View style={{ borderWidth: ms(0.4), borderColor: 'grey', marginBottom: ms(0.4) }}>
                    <Text style={theme.mediumText}>AGHNIA NADA SHABIRA</Text>
                </View>
                <TouchableOpacity onPress={() => setSumShow(!sumShow)}>
                    <Card containerStyle={theme.cardTop}>
                        <View style={theme.rowBetween}>
                            <Text style={theme.mediumSmallText}>SUMMARY</Text>
                            <AntDesign name={sumShow ? 'downsquare' : 'upsquare'} size={ms(20)} color={iconColor} onPress={() => setSumShow(!sumShow)} />
                        </View>
                        {sumShow ? <Text style={theme.greySmallText}>
                            {`Junior Application Developer with experience in design, installation, and testing. Knowledgeable in user interface and debugging processes. Skilled in JavaScript and React Native. \n\nAble to effectively self-manage during independent projects, as well as collaborate in a team setting. Experience as Stack Lead in the Final Project Bootcamp.`}
                        </Text> : null}
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTechShow(!techShow)} style={theme.container}>
                    <View style={theme.rowBetween}>
                        <Text style={theme.mediumSmallText}>TECH STACK</Text>
                        <AntDesign name={techShow ? 'downsquare' : 'upsquare'} size={ms(20)} color={iconColor} onPress={() => setTechShow(!techShow)} />
                    </View>
                </TouchableOpacity>
                {techShow ?
                    <View style={[theme.wrapEven, theme.container]}>
                        <Image source={require('../Assets/Images/reactnative.png')} style={[theme.logo, { width: ms(46.5) }]} />
                        <Image source={require('../Assets/Images/firebase.png')} style={[theme.logo, { width: ms(35) }]} />
                        <Image source={require('../Assets/Images/yarn.png')} style={[theme.logo, { width: ms(50) }]} />
                        <Image source={require('../Assets/Images/redux-saga.png')} style={[theme.logo, { width: ms(50) }]} />
                        <Image source={require('../Assets/Images/redux.png')} style={[theme.logo, { width: ms(50) }]} />
                        <Image source={require('../Assets/Images/axios.png')} style={[theme.logo, { width: ms(50) }]} />
                        <Image source={require('../Assets/Images/reactnavigation.png')} style={[theme.logo, { width: ms(50) }]} />
                        <Image source={require('../Assets/Images/vscode.png')} style={[theme.logo, { width: ms(50) }]} />
                        {darkMode ?
                            <Image source={require('../Assets/Images/github-light.png')} style={[theme.logo, { width: ms(50) }]} /> :
                            <Image source={require('../Assets/Images/github.png')} style={[theme.logo, { width: ms(50) }]} />
                        }
                        <Image source={require('../Assets/Images/gitlab.png')} style={[theme.logo, { width: ms(50) }]} />
                    </View> : null
                }
                <View style={theme.container}>
                    <View style={theme.rowBetween}>
                        <Text style={theme.mediumSmallText}>EXPERIENCE</Text>
                        <View style={theme.rowBetween}>
                            <Text style={theme.normalSmallText}>Sort by </Text>
                            <TouchableOpacity onPress={() => setSortNew(!sortNew)}>
                                <Card containerStyle={theme.cardBlack}>
                                    <Text style={theme.whiteSmallText}>{sortNew ? 'Newest' : 'Oldest'}</Text>
                                </Card>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                        data={sortNew ? DATA.sort((a, b) => { return a.id - b.id }) : DATA.sort((a, b) => { return b.id - a.id })}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        scrollEnabled={false}
                    />
                </View>
                <View style={[theme.rowBetween, theme.container]}>
                    <Text style={theme.mediumSmallText}>PORTFOLIO</Text>
                </View>
                {PORTO.map((e, i) => (
                    <View style={theme.container} key={`porto-key-${e.id}`}>
                        <View style={theme.rowBetween}>
                            <View style={{ flexShrink: 1 }}>
                                <Text style={theme.mediumBlackText}>{e.name}</Text>
                                <Text style={theme.greySmallText}>{e.sub}</Text>
                                <Text style={theme.normalSmallText}>{e.desc}</Text>
                                <TouchableOpacity style={theme.rowTop} onPress={() => Linking.openURL(e.appLink)}>
                                    <Text style={theme.blackSmallText}>Download App: </Text>
                                    <View>
                                        <Text style={theme.blackSmallText}>{e.appLink}</Text>
                                        <Divider />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={theme.rowTop} onPress={() => Linking.openURL(e.repo)}>
                                    <Text style={theme.blackSmallText}>View Code: </Text>
                                    <View>
                                        <Text style={theme.blackSmallText}>{e.repo}</Text>
                                        <Divider />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={theme.outline} onPress={() => Linking.openURL(e.appLink)}>
                                {darkMode ?
                                    <Image source={e.qrDark} style={theme.qr} /> :
                                    <Image source={e.qr} style={theme.qr} />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                <Card containerStyle={theme.cardBottom}>
                    <View style={theme.rowBetween}>
                        <Text style={theme.mediumSmallText}>CONTACT ME</Text>
                        <TouchableOpacity onPress={() => setShowContact(!showContact)}>
                            <Text style={theme.blackSmallText}>{showContact ? 'HIDE DETAIL' : 'SHOW DETAIL'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', paddingVertical: ms(10) }}>
                        <View style={{ alignItems: 'center', marginHorizontal: ms(20) }}>
                            <MaterialCommunityIcons name='whatsapp' color={iconColor} size={ms(20)}
                                onPress={() => { Linking.openURL('whatsapp://send?phone=+628170471998') }} />
                            {showContact ?
                                <TouchableOpacity onPress={() => {
                                    Clipboard.setString('08170471998')
                                    setIsVisible(!isVisible)
                                }}>
                                    <Text style={theme.blackSmallText}>08170471998</Text>
                                    <Divider orientation='horizontal' style={{ marginBottom: ms(15) }} />
                                </TouchableOpacity> : null
                            }
                        </View>
                        <View style={{ alignItems: 'center', marginHorizontal: ms(20) }}>
                            <MaterialCommunityIcons name='gmail' color={iconColor} size={ms(20)} onPress={() => {
                                Linking.openURL('mailto:aghnia.shabira@gmail.com')
                            }} />
                            {showContact ?
                                <TouchableOpacity>
                                    <Text style={theme.blackSmallText}
                                        onPress={() => {
                                            Clipboard.setString('aghnia.shabira@gmail.com')
                                            setIsVisible(!isVisible)
                                        }}
                                    >aghnia.shabira@gmail.com</Text>
                                    <Divider orientation='horizontal' style={{ marginBottom: ms(15) }} />
                                </TouchableOpacity> : null
                            }
                        </View>
                        <View style={{ alignItems: 'center', marginHorizontal: ms(20) }}>
                            <MaterialCommunityIcons name='github' color={iconColor} size={ms(20)}
                                onPress={() => Linking.openURL('https://github.com/Shabirara')} />
                            {showContact ?
                                <TouchableOpacity>
                                    <Text style={theme.blackSmallText} onPress={() => {
                                        Clipboard.setString('https://github.com/Shabirara')
                                        setIsVisible(!isVisible)
                                    }}>https://github.com/Shabirara</Text>
                                    <Divider orientation='horizontal' style={{ marginBottom: ms(15) }} />
                                </TouchableOpacity> : null
                            }
                        </View>
                        <View style={{ alignItems: 'center', marginHorizontal: ms(20) }}>
                            <MaterialCommunityIcons name='gitlab' color={iconColor} size={ms(20)}
                                onPress={() => {
                                    Linking.openURL('https://gitlab.com/shabirara')
                                }} />
                            {showContact ?
                                <TouchableOpacity>
                                    <Text style={theme.blackSmallText} onPress={() => {
                                        Clipboard.setString('https://gitlab.com/shabirara')
                                        setIsVisible(!isVisible)
                                    }}>https://gitlab.com/shabirara</Text>
                                    <Divider orientation='horizontal' style={{ marginBottom: ms(15) }} />
                                </TouchableOpacity> : null
                            }
                        </View>
                        <View style={{ alignItems: 'center', marginHorizontal: ms(20) }}>
                            <MaterialCommunityIcons name='linkedin' color={iconColor} size={ms(20)} onPress={() => {
                                Linking.openURL('https://www.linkedin.com/in/aghnia-nada-shabira-9325b4214')
                            }} />
                            {showContact ?
                                <TouchableOpacity>
                                    <Text onPress={() => {
                                        Clipboard.setString('www.linkedin.com/in/aghnia-nada-shabira-9325b4214')
                                        setIsVisible(!isVisible)
                                    }} style={theme.blackSmallText}>bit.ly/2YvyhPZ</Text>
                                    <Divider orientation='horizontal' style={{ marginBottom: ms(15) }} />
                                </TouchableOpacity> : null
                            }
                        </View>
                    </View>
                </Card>
            </ScrollView>
            <Modal isVisible={isVisible} onBackdropPress={() => setIsVisible(false)} onModalShow={() => setTimeout(() => { setIsVisible(false) }, 300)}>
                <View style={theme.modal}>
                    <Text style={theme.whiteSmallText}>Copied!</Text>
                </View>
            </Modal>
        </SafeAreaView >

    )
}
