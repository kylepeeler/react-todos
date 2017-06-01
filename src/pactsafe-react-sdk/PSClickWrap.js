/*global _ps*/
import React from 'react';
import PropTypes from 'prop-types';

class PSClickWrap extends React.Component {

    constructor(props) {
        super(props);
        this.generateUUID = this.generateUUID.bind(this);
        this.isSnippetLoaded = this.isSnippetLoaded.bind(this);
        const PSUrl = this.props.psScriptURL;
        if (!this.isSnippetLoaded(PSUrl)) {
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
        else {
            _ps.enableDebug();
        }
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

    isSnippetLoaded(PSUrl) {
        if (!PSUrl) {
            PSUrl = this.props.psScriptURL;
        }
        const scripts = document.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
            if (scripts[i].src === PSUrl) return true;
        }
        return false;
    }


    componentWillMount() {
        _ps('create', this.props.accessId, {
            test_mode: this.props.testMode,
            disable_sending: this.props.disableSending,
            dynamic: this.props.dynamic
        });

    }

    componentDidMount() {
        const groupKey = this.props.groupKey;
        if (groupKey) {
            _ps('load', groupKey, {
                filter: this.props.filter,
                container_selector: this.props.containerName,
                signer_id_selector: this.props.signerIDSelector,
                style: this.props.clickWrapStyle,
                display_all: this.props.displayAllContracts,
                render_data: this.props.renderData,
                event_callback: function (err, group) {
                    group.render();
                }

            });
        } else {
            _ps('load', {
                filter: this.props.filter,
                container_selector: this.props.containerName,
                signer_id_selector: this.props.signerIDSelector,
                style: this.props.clickWrapStyle,
                display_all: this.props.displayAllContracts,
                render_data: this.props.renderData
            });
        }
    }

    render() {
        console.log("render");
        return (
            <div id={this.props.containerName}>Div is on the page</div>
        )
    }

    componentWillUnmount(){
        _ps.getByKey(this.props.groupKey).rendered = false;
    }

}

export default PSClickWrap;

PSClickWrap.propTypes = {
    accessId: PropTypes.string.isRequired,
    groupKey: PropTypes.string,
    signerIDSelector: PropTypes.string.isRequired,
    containerName: PropTypes.string.isRequired,
    testMode: PropTypes.bool,
    disableSending: PropTypes.bool,
    filter: PropTypes.string,
    clickWrapStyle: PropTypes.string,
    displayAllContracts: PropTypes.bool,
    dynamic: PropTypes.bool,
    renderData: PropTypes.object,
    psScriptURL: PropTypes.string.isRequired
};

PSClickWrap.defaultProps = {
    displayAllContracts: true,
    psScriptURL: "//vault.pactsafe.io/ps.min.js"
};