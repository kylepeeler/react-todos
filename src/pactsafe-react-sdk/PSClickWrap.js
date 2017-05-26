/*global _ps*/
import React from 'react';
import PropTypes from 'prop-types';

class PSClickWrap extends React.Component{
    constructor(props){
        super(props);
        const PSUrl = "https://127.0.0.1:8081/ps.js";
        (function(w,d,s,c,n,a,b){w['PactSafeObject']=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)}, w[n].on=function(){(w[n].e=w[n].e||[]).push(arguments)},w[n].once=function(){(w[n].eo=w[n].eo||[]).push(arguments)},w[n].off=function(){(w[n].o=w[n].o||[]).push(arguments)},w[n].t=1*new Date(); a=d.createElement(s),b=d.getElementsByTagName(s)[0];a.async=1;a.src=c;b.parentNode.insertBefore(a,b) })(window,document,'script',PSUrl,'_ps');
    }

    componentWillMount(){
        if (!this.props.containerSelector){
            this.containerSelector = "ps-clickwrap-container-" + Date.now();
        }else{
            this.containerSelector = this.props.containerSelector;
        }
    }

    componentDidMount(){

        _ps('create', this.props.accessId, {test_mode: this.props.testMode, disable_sending: this.props.disableSending, dynamic: this.props.dynamic});
        if (this.props.groupKey){
            _ps('load', this.props.groupKey, {
                filter: this.props.filter,
                container_selector: this.containerSelector,
                signer_id_selector: this.props.signerIDSelector,
                style: this.props.clickWrapStyle,
                display_all: this.props.displayAllContracts,
                render_data: this.props.renderData
            });
        }else {
            _ps('load', {
                filter: this.props.filter,
                container_selector: this.containerSelector,
                signer_id_selector: this.props.signerIDSelector,
                style: this.props.clickWrapStyle,
                display_all: this.props.displayAllContracts,
                render_data: this.props.renderData
            });
        }
        _ps.debug = true;
    }

    componentWillUnmount(){

    }

    render(){
        return(
            <div ref={el => this.el = el} id={this.containerSelector}></div>
        )
    }
}

export default PSClickWrap;

PSClickWrap.propTypes = {
    accessId: PropTypes.string.isRequired,
    groupKey: PropTypes.string,
    signerIDSelector: PropTypes.string.isRequired,
    containerSelector: PropTypes.string,
    testMode: PropTypes.bool,
    disableSending: PropTypes.bool,
    filter: PropTypes.string,
    clickWrapStyle: PropTypes.string,
    displayAllContracts: PropTypes.bool,
    dynamic: PropTypes.bool,
    renderData: PropTypes.object
};

