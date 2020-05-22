import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components/native'
import { HeaderEmitter } from '../../framework/header/header_emitter'
import { Spacer } from '../../components/base/spacer'
import { nanoid } from 'nanoid/non-secure'
import { TextInput } from '../../components/base/text_input'
import { THEME } from '../../framework/theme'
import { FooterEmitter } from '../../framework/footer/footer_emitter'
import { NavEmitter } from '../../framework/navigator/nav_emitter'
import { IEval, evalData } from '../../data/eval_data'
import { ScrollView, TouchableWithoutFeedback } from 'react-native'
import { IStudent, studentData } from '../../data/student_data'
import { PickerEmitter } from '../../framework/picker/picker_emitter'

export const AddEval = () => {
  const [chooseStudent, setChooseStudent] = useState('Student')
  const evalID = useRef('')

  useEffect(() => {
    HeaderEmitter.set('New Eval')
    FooterEmitter.cancel(() => {
      evalData.removeEval(evalID.current)
      NavEmitter.goto('Evals')
    })
    FooterEmitter.confirm(() => {
      NavEmitter.goto('Evals')
    })

    evalID.current = evalData.newEval()
  }, [])

  const data: Array<{
    placeholder: string
    onChange: (v: string) => void
  }> = [
    {
      placeholder: 'Mission',
      onChange: (v) => {
        let e = evalData.getEvalByID(evalID.current)
        if (e) {
          e.mission = v
        }
      },
    },
    {
      placeholder: 'Position',
      onChange: (v) => {
        let e = evalData.getEvalByID(evalID.current)
        if (e) {
          e.position = v
        }
      },
    },
    {
      placeholder: 'Date',
      onChange: (v) => {
        let e = evalData.getEvalByID(evalID.current)
        if (e) {
          e.date = v
        }
      },
    },
  ]

  let content: Array<JSX.Element> = []
  content.push(<Spacer vertical={25} key={nanoid()} />)
  data.forEach((e) => {
    content.push(
      <Item placeholder={e.placeholder} onChange={e.onChange} key={nanoid()} />
    )
    content.push(<Spacer vertical={25} key={nanoid()} />)
  })
  content.pop()

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 500,
        paddingHorizontal: 25,
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          let a: Array<JSX.Element> = []
          if (studentData.studentData.length > 0) {
            studentData.studentData.forEach((s) => {
              a.push(
                <PickerItem
                  key={nanoid()}
                  student={s}
                  evalID={evalID.current}
                  onPress={(student: IStudent) => {
                    setChooseStudent(
                      `${student.rank} ${student.lastName}, ${student.firstName}`
                    )
                  }}
                />
              )
              a.push(<SeperatorLine key={nanoid()} />)
            })
            a.pop()
          } else {
            a.push(<PickerItemNone key={nanoid()} />)
          }
          PickerEmitter.on('Student', a)
        }}
      >
        <ChooseStudent>
          <THEME.text.body>{chooseStudent}</THEME.text.body>
        </ChooseStudent>
      </TouchableWithoutFeedback>
      {content}
    </ScrollView>
  )
}

const ChooseStudent = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${THEME.colors.component};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`

const SeperatorLine = styled.View`
  width: 50%;
  height: 1px;
  background-color: ${THEME.colors.component};
`

const Item = (props: {
  placeholder: string
  onChange: (v: string) => void
}) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      onChange={props.onChange}
      key={nanoid()}
    />
  )
}

const PickerItem = (props: {
  student: IStudent
  evalID: string
  onPress: (student: IStudent) => void
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        let e = evalData.getEvalByID(props.evalID)
        if (e) {
          e.studID = props.student.id
        }
        PickerEmitter.off()
        props.onPress(props.student)
      }}
    >
      <PickerWrapper>
        <THEME.text.body>
          {`${props.student.rank} ${props.student.lastName}, ${props.student.firstName}`}
        </THEME.text.body>
      </PickerWrapper>
    </TouchableWithoutFeedback>
  )
}

const PickerItemNone = () => {
  return (
    <PickerWrapper>
      <THEME.text.body>student roster is empty big sarge...</THEME.text.body>
    </PickerWrapper>
  )
}

const PickerWrapper = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`
