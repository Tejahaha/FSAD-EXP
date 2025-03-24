import Page1 from './Content'
import P2p1 from './p2p1'
import P2p2 from './p2p2'

function Content({store}) {

     function Page(){
          switch(store.getState()){
               case "page1":
                    return (<div><Page1 store={store} /> </div>)
               case "p2p1":
                    return (<div><P2p1 store={store} /></div>)
               case "p2p2":
                    return (<div><P2p2 store={store} /></div>)
               default:
                    return (<div><Page1 store={store} /> </div>)
          }
     }

  return (
    <div>

          <Page />


    </div>
  )
}

export default Content