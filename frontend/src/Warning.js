import React from 'react';
import './Warning.css';
import {Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import kuchmaWine from './images/130809082218_kuchma_wine_304x171_unian.jpg';
import bg from './images/lagos_jjkmqgp_1rbo0ei.gif'

class Warning extends React.Component{
    constructor(props) {
        super(props);

        this.state = {param: 0};
    }
    
    render() {

        if (this.state.param == 2) {
            alert('Nu ty i maloletka')
            this.setState({param: 1})
        }

        if (this.state.param == 1) {
            return (<Redirect push to={'/app'}/>);
        }

          return (
            <div className={'Warning'}>
               <header className={'Warning-header'} style = {{ backgroundImage: "url("+bg+")" }}>
                   <img src={kuchmaWine} className="Warning-logo" alt="logo" /><br/><br/>
                    <p>
                    Хто це?
                    </p>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(event) => { this.setState({ param: 2 }) }}
                        >
                            Віктор Павлік
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(event) => { this.setState({ param: 2 }) }}
                        >
                            Барбара Страйзанд
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(event) => { this.setState({ param: 1 }) }}
                        >
                            Леонід Кучма
                        </Button>
                    </Grid>
               </header>
            </div>
        );
    }

}

export default Warning;