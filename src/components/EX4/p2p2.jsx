
function p2p2({store}) {
    function navigation(event){
        store.dispatch({"type":"page","data":event.currentTarget.getAttribute("val")})
    }
  return (
    <div>
        <a onClick={navigation} val={"page1"}>Page 1</a>

        <a onClick={navigation} val={"p2p1"}>Page 2</a>

        <br/><br/><br/>
        
        <a onClick={navigation} val={"page1"}>P2-P1</a>
        <a onClick={navigation} val={"p2p2"}>P2-P2</a>
        <div className='content1'>
            This is page2 -page2

        </div>
    </div>
  )
}

export default p2p2