import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Feather,
  Ionicons,
} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native'
import { emitter } from '../../my_modules/emitter'
import { pages, NavEmitter } from '../navigator/nav_emitter'
import { THEME } from '../theme'
import SafeAreaView from 'react-native-safe-area-view'

export function Footer() {
  const [home, setHome] = useState<pages>()
  const [back, setBack] = useState<pages>()
  const [trash, setTrash] = useState<{ action: () => void }>()
  const [add, setAdd] = useState<{ action: () => void }>()
  const [edit, setEdit] = useState<{ action: () => void }>()
  const [cancel, setCancel] = useState<{ action: () => void }>()
  const [confirm, setConfirm] = useState<{ action: () => void }>()

  useEffect(() => {
    emitter.on('@Footer-setHome', (status: boolean) => {
      setHome(status ? 'Home' : undefined)
    })
    emitter.on('@Footer-setBack', (page?: pages) => {
      setBack(page)
    })
    emitter.on('@Footer-setTrash', (action?: () => void) => {
      setTrash(action ? { action: action } : undefined)
    })
    emitter.on('@Footer-setAdd', (action?: () => void) => {
      setAdd(action ? { action: action } : undefined)
    })
    emitter.on('@Footer-setEdit', (action?: () => void) => {
      setEdit(action ? { action: action } : undefined)
    })
    emitter.on('@Footer-setCancel', (action?: () => void) => {
      setCancel(action ? { action: action } : undefined)
    })
    emitter.on('@Footer-setConfirm', (action?: () => void) => {
      setConfirm(action ? { action: action } : undefined)
    })
  }, [])

  return (
      <Styles.BigWrapper pointerEvents="box-none">
        <Styles.Wrapper>
          <Styles.LeftSide>
            <HomeButton
              fade={!!home}
              onPress={() => {
                if (home) NavEmitter.goto('Home')
              }}
            />
            <BackButton
              fade={!!home}
              onPress={() => {
                if (back) NavEmitter.goto(back)
              }}
            />
          </Styles.LeftSide>
          <Styles.VLine />
          <Styles.RightSide>
            {trash && (
              <TrashButton
                onPress={() => {
                  trash.action
                }}
              />
            )}
            {add && <AddStudentButton onPress={add.action} />}
            {edit && <EditButton onPress={() => {}} />}
            {cancel && (
              <CancelButton
                onPress={() => {
                  cancel.action
                }}
              />
            )}
            {confirm && (
              <ConfirmButton
                onPress={() => {
                  confirm.action
                }}
              />
            )}
          </Styles.RightSide>
        </Styles.Wrapper>
      </Styles.BigWrapper>
  )
}

const HomeButton = (props: { fade: boolean; onPress: () => void }) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Styles.Box>
        <MaterialCommunityIcons
          name="home-outline"
          size={24}
          color={props.fade ? THEME.colors.icon : THEME.colors.fade}
        />
        <THEME.text.CAPTION
          style={{ color: props.fade ? THEME.colors.icon : THEME.colors.fade }}
        >
          HOME
        </THEME.text.CAPTION>
      </Styles.Box>
    </TouchableWithoutFeedback>
  )
}

const BackButton = (props: { fade: boolean; onPress: () => void }) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Styles.Box>
        <Ionicons
          name="md-arrow-round-back"
          size={24}
          color={props.fade ? THEME.colors.icon : THEME.colors.fade}
        />
        <THEME.text.CAPTION
          style={{ color: props.fade ? THEME.colors.icon : THEME.colors.fade }}
        >
          BACK
        </THEME.text.CAPTION>
      </Styles.Box>
    </TouchableWithoutFeedback>
  )
}

const AddStudentButton = (props: { onPress: () => void }) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Styles.Box>
        <MaterialIcons name="person-add" size={24} color={THEME.colors.icon} />
        <THEME.text.CAPTION style={{ color: THEME.colors.icon }}>
          ADD
        </THEME.text.CAPTION>
      </Styles.Box>
    </TouchableWithoutFeedback>
  )
}

const EditButton = (props: { onPress: () => void }) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Styles.Box>
        <Feather name="edit" size={24} color={THEME.colors.icon} />
        <THEME.text.CAPTION style={{ color: THEME.colors.icon }}>
          EDIT
        </THEME.text.CAPTION>
      </Styles.Box>
    </TouchableWithoutFeedback>
  )
}

const CancelButton = (props: { onPress: () => void }) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Styles.Box>
        <MaterialIcons name="cancel" size={24} color={THEME.colors.icon} />
        <THEME.text.CAPTION style={{ color: THEME.colors.icon }}>
          CANCEL
        </THEME.text.CAPTION>
      </Styles.Box>
    </TouchableWithoutFeedback>
  )
}

const ConfirmButton = (props: { onPress: () => void }) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Styles.Box>
        <FontAwesome name="check" size={24} color={THEME.colors.icon} />
        <THEME.text.CAPTION style={{ color: THEME.colors.icon }}>
          OK
        </THEME.text.CAPTION>
      </Styles.Box>
    </TouchableWithoutFeedback>
  )
}

const TrashButton = (props: { onPress: () => void }) => {
  const [confirm, setConfirm] = useState(false)

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (!confirm) {
          setConfirm(true)
          setTimeout(() => {
            setConfirm(false)
          }, 1000)
        } else {
          setConfirm(false)
          props.onPress()
        }
      }}
    >
      <Styles.Box>
        <FontAwesome5
          name="trash-alt"
          size={24}
          color={confirm ? THEME.colors.red : THEME.colors.icon}
        />
        <THEME.text.CAPTION
          style={{ color: confirm ? THEME.colors.red : THEME.colors.text }}
        >
          REMOVE
        </THEME.text.CAPTION>
      </Styles.Box>
    </TouchableWithoutFeedback>
  )
}

const Styles = {
  BigWrapper: styled.SafeAreaView`
    height: 100%;
    justify-content: flex-end;
  `,
  Wrapper: styled.View`
    width: 100%;
    height: 50px;
    border-top-color: ${THEME.colors.line};
    border-top-width: 2px;
    /* border-bottom-color: ${THEME.colors.line};
    border-bottom-width: 2px; */
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${THEME.colors.background};
  `,
  LeftSide: styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
  `,
  VLine: styled.View`
    width: 2px;
    height: 50%;
    background-color: ${THEME.colors.line};
  `,
  RightSide: styled.View`
    flex: 2;
    flex-direction: row;
    justify-content: space-evenly;
  `,
  Box: styled.View`
    min-width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    /* border-bottom-color: ${THEME.colors.icon};
    border-bottom-width: 2px; */
    /* background-color: white; */
  `,
}
