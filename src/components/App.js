import React,{Component} from 'react'
import articles from '../fixtures'
import ArticleList from './ArticleList'
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component{
   state={
        //reverted:false
   }
    render(){
        return (
          <div className="container">
                <div className="jumbotron">
                    <h1>App name
                       <button className="btn" onClick={this.revert}>Revert</button>
                    </h1>
                </div>
                        <ArticleList articles={this.state.reverted ? articles.reverse(): articles}/>

            </div>
)
    }
revert=()=>this.setState({
    reverted:!this.state.reverted
})
}
export default App
