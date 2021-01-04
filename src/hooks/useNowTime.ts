import { ref } from 'vue'

const nowTime = ref('0:0:0')

const getNowTime = () => {
  const now = new Date()
  const hours = (now.getHours() + '').padStart(2, '0')
  const mins = (now.getMinutes() + '').padStart(2, '0')
  const sec = (now.getSeconds() + '').padStart(2, '0')
  nowTime.value = `${hours}:${mins}:${sec}`
  setTimeout(getNowTime, 1000)
}

export {
  nowTime,
  getNowTime
}
