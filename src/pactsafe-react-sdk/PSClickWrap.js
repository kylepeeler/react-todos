/*global _ps*/
import React from 'react';
import PropTypes from 'prop-types';

class PSClickWrap extends React.Component {
    constructor(props) {
        super(props);
        const PSUrl = "https://127.0.0.1:8081/ps.js";
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
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', PSUrl, '_ps');
        //todo: fix this, Date.now is not reliable when rendering multiple clickwraps
        if (!this.props.containerSelector) {
            this.containerSelector = "ps-clickwrap-container-" + Date.now();
        } else {
            this.containerSelector = this.props.containerSelector;
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        _ps('create', this.props.accessId, {
            test_mode: this.props.testMode,
            disable_sending: this.props.disableSending,
            dynamic: this.props.dynamic
        });
        if (this.props.groupKey) {
            _ps('load', this.props.groupKey, {
                filter: this.props.filter,
                container_selector: this.containerSelector,
                signer_id_selector: this.props.signerIDSelector,
                style: this.props.clickWrapStyle,
                display_all: this.props.displayAllContracts,
                render_data: this.props.renderData
            });
        } else {
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

    componentWillUnmount() {

    }

    render() {
        return (
            <div ref={el => this.el = el} id={this.containerSelector}>

            </div>
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

PSClickWrap.defaultProps = {
    displayAllContracts: true
};