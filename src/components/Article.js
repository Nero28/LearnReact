import React,{Component} from 'react';


class Article extends Component{
constructor(props){
    super(props)

    this.state={
       isOpen:props.defaultOpen
    }
}
shouldComponentUpdate(nextProps,nextState){
    return this.state.isOpen!==nextState.isOpen
}
    componentWillMount(){
        console.log('---','mounting')
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.defaultOpen!==this.props.defaultOpen)this.setState({
            isOpen:nextProps.defaultOpen

        })
    }
componentWillUpdate() {
    console.log('---','will update')
}

    

    render(){
    const {article}=this.props
    console.log('---',this.props)
    const body=this.state.isOpen && <section className="card-text">{article.text}</section>;
        return(
            <div className="card mx-auto" style={{width:'50%'}}> 
               <div className="card-header">
                  <h2>
                  {article.title}
                   <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right"> 
                      {this.state.isOpen ?'close':'open'}
                   </button>
                   </h2>
               </div>
            <div className="card-body"> 
                <h6 className="card-subtitle ext-muted">
                creation date:{(new Date(article.date).toDateString())}
                   </h6>
                   {body}
             </div>
             </div>
            )
        }
    
    handleClick = () => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
}


export default Article