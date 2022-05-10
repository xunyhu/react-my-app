(function() {
    'use strict';

    var emptyObject = {}
    {
        //冻结对象
        Object.freeze(emptyObject)
    }

    function wranNoop(publicInstance, callerName) {
        {
            
        }
    }

    //等待更新队列
    var ReactNoopUpdateQueue = {
        isMounted: function(publicInstance) {
            return false
        },
        enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, 'forceUpdate')
        },
        enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, 'replaceState')
        },
        //实例对象、satate,callback,callerName
        enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, 'setState')
        }
    }
    function Component(props, context, updater) {
        this.props = props
        this.context = context
        this.refs = emptyObject
        this.updater = updater || ReactNoopUpdateQueue
    }

    Component.prototype.isReactComponent = {}
    //部分state, 回调
    Component.prototype.setState = function(partialState, callback) {
        if (!(typeof partialState === 'object' || typeof partialState === 'function' || typeof partialState === null)) {
            {
                throw Error('setState fail')
            }
        }

        this.updater.enqueueSetState(this, partialState, callback, 'setState')
    }
})()