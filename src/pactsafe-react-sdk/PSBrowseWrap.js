/* global _ps */
import React from 'react';
import PropTypes from 'prop-types';

class PSBrowseWrap extends React.Component{
    constructor(props){
        super(props);
        const PSUrl = this.props.psScriptURL;
        if (!this.isSnippetLoaded(PSUrl)){
            (function (window, document, script, src, pso, a, m) {
                window['PactSafeObject'] = pso;
                window[pso] = window[pso] || function () {
                    (window[pso].q = window[pso].q || []).push(arguments)
                }, window[pso].on = function () {
                    (window[pso].e = window[pso].e || []).push(arguments)
                }, window[pso].once = function () {
                    (window[pso].eo = window[pso].eo || []).push(arguments)
                }, window[pso].off = function () {
                    (window[pso].o = window[pso].o || []).push(arguments)
                }, window[pso].t = 1 * new Date();
                a = document.createElement(script),
                m = document.getElementsByTagName(script)[0];
                a.async = 1;
                a.src = src;
                m.parentNode.insertBefore(a, m);
                window[pso].debug = true;
            })(window, document, 'script', PSUrl, '_ps');
        }
        this.targetSelector = 'psbw-' + this.props.groupKey;
    }

    generateUUID() {
        let d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    isSnippetLoaded(PSUrl){
        if (!PSUrl){
            PSUrl = this.props.psScriptURL;
        }
        const scripts = document.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++){
            if (scripts[i].src === PSUrl) return true;
        }
        return false;
    }

    componentWillMount(){
        _ps('create', this.props.accessId);
    }

    componentDidMount(){
        _ps('load', this.props.groupKey, {
            target_selector: this.targetSelector,
            position: this.props.position,
            badge_text: this.props.badgeText,
            always_visible: this.props.alwaysVisible,
            open_legal_center: this.props.openLegalCenter
        });
    }

    render(){
        return(
            <a href={this.props.link} id={this.targetSelector}>{this.props.linkText}</a>
        );
    }

    componentWillUnmount(){
        _ps.getByKey(this.props.groupKey).rendered = false
    }
}

PSBrowseWrap.propTypes = {
    psScriptURL: PropTypes.string.isRequired,
    accessId: PropTypes.string.isRequired,
    groupKey: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['middle','left', 'right', 'auto']).isRequired,
    alwaysVisible: PropTypes.bool,
    badgeText: PropTypes.string,
    openLegalCenter: PropTypes.bool,
    link: PropTypes.string
};

// _ps('load', 'test-browsewrap', {
//     target_selector: 'legal-center-link', //target selector, string
//     position: 'middle', //left, middle, right
//     badge_text: 'lol', //any string
//     always_visible: true, //boolean
//     open_legal_center: true //boolean
// });

PSBrowseWrap.defaultProps = {
    psScriptURL: "//vault.pactsafe.io/ps.min.js",
    position: 'auto',
    link: '#'
};

export default PSBrowseWrap;