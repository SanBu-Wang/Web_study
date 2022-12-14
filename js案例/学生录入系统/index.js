//拿到学生数据
//用getName函数获取学生姓名
let input = document.getElementsByTagName('input')
let getGender = document.getElementsByTagName('select')[0]
let tbody = document.getElementById('main')

//拿到表单
let getForm = document.getElementById('getForm')


//拿到提交按钮作为事件的入口
let startGet = document.getElementById('startSend')
//利用Json来存储学生信息
let pushToStu = [
    {xh: '001', name: '', id: '', gender: '', num: '', isDelete: 'false'}
]

function deleteStu(i) {
    allStu.splice(i, 1)//删除数组中的元素
    let removeTr = document.getElementsByClassName('R-ATr')//拿到所有的tr
    //删除后重新DOM，移除对应的tr
    tbody.removeChild(removeTr[i])//移除对应的tr
    console.log(allStu)//打印出删除后的数组
}

//储存所有学生信息
let allStu = []

startGet.onclick = () => {
    let obj = {
        name: input[0].value,
        id: input[1].value,
        gender: getGender.value,
        number: input[2].value,
        isDelete: 'false'
    }
    allStu.push(obj)
    console.log(allStu)
    let wri = ''
    //遍历allStu数组拼接字符串
    for (let i = 0; i < allStu.length; i++) {
        wri += `
        <tr class="R-ATr">
            <td>${'00' + (i + 1)}</td>
            <td>${allStu[i].name}</td>
            <td>${allStu[i].id}</td>
            <td>${allStu[i].gender}</td>
            <td>${allStu[i].number}</td>
            <td><button class="delete" onclick="deleteStu(${i})">删除</button></td>
        </tr>`
    }
    console.log(wri)
    tbody.innerHTML = wri
}