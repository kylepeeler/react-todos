/*global _ps*/
import React from 'react';
import PropTypes from 'prop-types';

class PSClickWrap extends React.Component{
    constructor(props){
        super(props);
        const PSUrl = "https://127.0.0.1:8081/ps.js";
        (function(window, document, script, src, pso, a, m) {
            window['PactSafeObject'] = pso;
            window[pso] = window[pso] || function() {
                    (window[pso].q = window[pso].q || []).push(arguments);
                };
            window[pso].t = 1 * new Date();
            a = document.createElement(script);
            m = document.getElementsByTagName(script)[0];
            a.async = 1;
            a.src = src;
            m.parentNode.insertBefore(a, m);
        })(window, document, 'script', PSUrl, '_ps');

    }

    componentWillMount(){
        if (!this.props.containerSelector){
            this.containerSelector = "ps-clickwrap-container-" + Date.now();
        }else{
            this.containerSelector = this.props.containerSelector;
        }
    }

    componentDidMount(){

        _ps('create', this.props.accessId, {test_mode: this.props.testMode, disable_sending: this.props.disableSending});
        _ps('load', this.props.groupKey, {container_selector: this.containerSelector, signer_id_selector: this.props.signerIDSelector});

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
    groupKey: PropTypes.string.isRequired,
    signerIDSelector: PropTypes.string.isRequired,
    containerSelector: PropTypes.string,
    testMode: PropTypes.bool,
    disableSending: PropTypes.bool
};

