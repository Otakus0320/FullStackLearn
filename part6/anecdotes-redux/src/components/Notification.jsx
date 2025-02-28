import {useDispatch, useSelector } from 'react-redux'
import {useEffect} from "react";
import {setIsVisible} from "../reducers/notificationReducer.js"

const Notification = () => {

  const {content, isVisible} = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const dispatch = useDispatch()

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        dispatch(setIsVisible(false))
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [dispatch, isVisible])

  if (!isVisible) return null

  return (
      <div style={style}>
        {content}
      </div>
  )
}

export default Notification