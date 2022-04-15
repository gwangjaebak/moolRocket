// const Data = () => {
//     const [list, setList] = useState(data);

//     const OnChecked = (id) => {
//         setList([...checkedIDList, id]);
//     }
//     const UnChecked = (id) => {
//         setList(checkedIDList.filter(e=> e!==id))
//     }

//     // ===============
//     OnChecked(id);
// }


// function Page({ data }) {
//     console.log(this.props.data)
//    //res.json()이 찍힙니다
//   }
  
  
//   export async function getServerSideProps() {
   
//     const res = await fetch(`https://.../data`)
//     const data = await res.json()
  
//     return { props: { data: data } }
//   }
  
//   export default Page]


// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       firstName: 'Yongseong',
//       lastName: 'Kim'
//     }
//   });