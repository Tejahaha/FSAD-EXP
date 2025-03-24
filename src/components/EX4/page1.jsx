
function page1({store}) {
    function navigation(event){
        store.dispatch({"type":"page","data":event.currentTarget.getAttribute("val")})
    }
  return (
    <div>
        <a onClick={navigation} val={"page1"}>Page 1</a>

        <br/><br/><br/>

        <a onClick={navigation} val={"p2p1"}>Page 2</a>

        <br/><br/><br/>

        <div className='content1'>
            This is page 1234

        </div>
    </div>
  )
}

export default page1