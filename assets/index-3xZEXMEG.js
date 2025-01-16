import { b as reactExports, j as jsxRuntimeExports } from "./index-ew5OrauJ.js";
var livephotoskit$1 = { exports: {} };
/*!
 * Copyright (c) 2017 Apple Inc. All rights reserved.
 * 
 * # LivePhotosKit JS License
 * 
 * **IMPORTANT:** This Apple LivePhotosKit software is supplied to you by Apple
 * Inc. ("Apple") in consideration of your agreement to the following terms, and
 * your use, reproduction, or installation of this Apple software constitutes
 * acceptance of these terms. If you do not agree with these terms, please do not
 * use, reproduce or install this Apple software.
 * 
 * This Apple LivePhotosKit software is supplied to you by Apple Inc. ("Apple") in
 * consideration of your agreement to the following terms, and your use,
 * reproduction, or installation of this Apple software constitutes acceptance of
 * these terms. If you do not agree with these terms, please do not use, reproduce
 * or install this Apple software.
 * 
 * This software is licensed to you only for use with LivePhotos that you are
 * authorized or legally permitted to embed or display on your website. 
 * 
 * The LivePhotosKit Software is only licensed and intended for the purposes set
 * forth above and may not be used for other purposes or in other contexts without
 * Apple's prior written permission. For the sake of clarity, you may not and
 * agree not to or enable others to, modify or create derivative works of the
 * LivePhotosKit Software.
 * 
 * Neither the name, trademarks, service marks or logos of Apple Inc. may be used
 * to endorse or promote products, services without specific prior written
 * permission from Apple. Except as expressly stated in this notice, no other
 * rights or licenses, express or implied, are granted by Apple herein.
 * 
 * The LivePhotosKit Software is provided by Apple on an "AS IS" basis. APPLE
 * MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE
 * IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE, REGARDING THE LIVEPHOTOSKIT SOFTWARE OR ITS USE AND
 * OPERATION ALONE OR IN COMBINATION WITH YOUR PRODUCTS, SYSTEMS, OR SERVICES.
 * APPLE DOES NOT WARRANT THAT THE LIVEPHOTOSKIT SOFTWARE WILL MEET YOUR
 * REQUIREMENTS, THAT THE OPERATION OF THE LIVEPHOTOSKIT SOFTWARE WILL BE
 * UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS IN THE LIVEPHOTOSKIT SOFTWARE WILL BE
 * CORRECTED, OR THAT THE LIVEPHOTOSKIT SOFTWARE WILL BE COMPATIBLE WITH FUTURE
 * APPLE PRODUCTS, SOFTWARE OR SERVICES. NO ORAL OR WRITTEN INFORMATION OR ADVICE
 * GIVEN BY APPLE OR AN APPLE AUTHORIZED REPRESENTATIVE WILL CREATE A WARRANTY. 
 * 
 * IN NO EVENT SHALL APPLE BE LIABLE FOR ANY DIRECT, SPECIAL, INDIRECT, INCIDENTAL
 * OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) RELATING TO OR ARISING IN ANY WAY OUT OF THE USE, REPRODUCTION,
 * OR INSTALLATION, OF THE LIVEPHOTOSKIT SOFTWARE BY YOU OR OTHERS, HOWEVER CAUSED
 * AND WHETHER UNDER THEORY OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT
 * LIABILITY OR OTHERWISE, EVEN IF APPLE HAS BEEN ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR
 * PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION
 * MAY NOT APPLY TO YOU. In no event shall Apple's total liability to you for all
 * damages (other than as may be required by applicable law in cases involving
 * personal injury) exceed the amount of fifty dollars ($50.00). The foregoing
 * limitations will apply even if the above stated remedy fails of its essential
 * purpose. 
 * 
 * 
 * **ACKNOWLEDGEMENTS:**
 * https://cdn.apple-livephotoskit.com/lpk/1/acknowledgements.txt
 * 
 * v1.5.6
 */
var livephotoskit = livephotoskit$1.exports;
var hasRequiredLivephotoskit;
function requireLivephotoskit() {
  if (hasRequiredLivephotoskit) return livephotoskit$1.exports;
  hasRequiredLivephotoskit = 1;
  (function(module, exports) {
    !function(e, t) {
      module.exports = t();
    }(livephotoskit, function() {
      return function(e) {
        function t(i) {
          if (r[i]) return r[i].exports;
          var n = r[i] = {
            i,
            l: false,
            exports: {}
          };
          return e[i].call(n.exports, n, n.exports, t), n.l = true, n.exports;
        }
        var r = {};
        return t.m = e, t.c = r, t.i = function(e2) {
          return e2;
        }, t.d = function(e2, r2, i) {
          t.o(e2, r2) || Object.defineProperty(e2, r2, {
            configurable: false,
            enumerable: true,
            get: i
          });
        }, t.n = function(e2) {
          var r2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return t.d(r2, "a", r2), r2;
        }, t.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, t.p = "", t(t.s = 25);
      }([function(e, t, r) {
        function i(e2) {
          if (e2) {
            var t2 = e2.staticMembers;
            t2 && n.call(this, t2), n.call(this.prototype, e2);
          }
        }
        function n(e2) {
          for (var t2 in e2) if (e2.hasOwnProperty(t2) && "staticMembers" !== t2) {
            var r2 = Object.getOwnPropertyDescriptor(e2, t2);
            r2.get || r2.set ? Object.defineProperty(this, t2, r2) : a.call(this, t2, e2[t2]);
          }
        }
        function a(e2, t2) {
          var r2 = this[e2];
          return r2 instanceof Function && t2 instanceof Function ? o.call(this, e2, t2, r2) : F.instanceOrKindOf(t2, F.Metadata) ? s.call(this, e2, t2) : void (this[e2] = t2);
        }
        function o(e2, t2, r2) {
          this[e2] = function() {
            var e3 = this._super;
            this._super = r2;
            var i2 = t2.apply(this, arguments);
            return this._super = e3, i2;
          };
        }
        function s(e2, t2) {
          this.hasOwnProperty("_metadatas") || (this._metadatas = Object.create(this._metadatas)), (t2.isLPKClass ? t2.sharedInstance : t2).registerOnDefinition(this, e2);
        }
        function u(e2) {
          var t2 = this["_callbacksFor_" + e2];
          if (t2) {
            var r2 = void 0;
            if (arguments.length > 1) {
              r2 = F.arrayPool.get();
              for (var i2 = 1, n2 = arguments.length; i2 < n2; i2++) r2[i2 - 1] = arguments[i2];
            }
            var a2 = void 0;
            if (a2 = this._triggerPauseStack) {
              var o2 = a2[a2.length - 1];
              if ("IS_FLUSHING" !== o2[o2.length - 1]) return void o2.push(this, e2, r2);
            }
            for (var s2 = 0, u2 = t2.length; s2 < u2; s2++) {
              var l2 = t2[s2];
              l2 && l2.apply(this, r2);
            }
            r2 && F.arrayPool.ret(r2);
          }
        }
        function l(e2, t2) {
          if (-1 !== e2.indexOf(".")) return c.call(this, e2, t2);
          var r2 = "_callbackToIndexMapFor_" + e2, i2 = this.hasOwnProperty(r2) ? this[r2] : this[r2] = this[r2] ? new w.a(this[r2]) : new w.a();
          if (void 0 === i2.get(t2)) {
            var n2 = "_callbacksFor_" + e2, a2 = this.hasOwnProperty(n2) ? this[n2] : this[n2] = this[n2] ? this[n2].slice() : [];
            i2.set(t2, a2.length), a2.push(t2);
          }
        }
        function d(e2, t2) {
          if (-1 !== e2.indexOf(".")) return h.call(this, e2, t2);
          var r2 = "_callbackToIndexMapFor_" + e2, i2 = this[r2];
          if (i2 && void 0 !== i2.get(t2)) {
            var n2 = this.hasOwnProperty(r2) ? this[r2] : this[r2] = this[r2] ? new w.a(this[r2]) : new w.a(), a2 = "_callbacksFor_" + e2;
            (this.hasOwnProperty(a2) ? this[a2] : this[a2] = this[a2] ? this[a2].slice() : [])[n2.get(t2)] = null, n2.delete(t2);
          }
        }
        function c(e2, t2, r2) {
          var i2 = "_" + e2 + "_" + F.guidFor(t2) + "_" + F.guidFor(r2), n2 = "_chainListenerMaintenanceCallback_for" + i2;
          if (!this[n2]) {
            var a2 = e2.indexOf("."), o2 = -1 !== a2, s2 = e2.substring(a2 + 1), u2 = s2.substring(0, (s2.indexOf(".") + 1 || s2.length + 1) - 1), d2 = e2.substring(0, -1 === a2 ? e2.length : a2), p2 = "_chainListenerPreviousStoredValue_for" + i2, f2 = function(e3) {
              var i3 = r2 || this;
              if (u2 && o2) {
                var n3 = this[d2], a3 = this[p2];
                n3 !== a3 && (this[p2] = n3, a3 && a3.isLPKObservable && h.call(a3, s2, t2, i3), n3 && n3.isLPKObservable && c.call(n3, s2, t2, i3));
              }
              e3 || t2.call(i3);
            };
            l.call(this, d2, f2), this.isInitialized && f2.call(this, true), this[n2] = f2;
          }
        }
        function h(e2, t2, r2) {
          var i2 = "_" + e2 + "_" + F.guidFor(t2) + "_" + F.guidFor(r2), n2 = "_chainListenerMaintenanceCallback_for" + i2, a2 = this[n2];
          if (a2) {
            var o2 = e2.indexOf("."), s2 = e2.substring(0, -1 === o2 ? e2.length : o2);
            d.call(this, s2, a2);
            var u2 = "_chainListenerPreviousStoredValue_for" + i2, l2 = this[u2];
            if (l2 && l2.isLPKObservable) {
              this[u2] = void 0;
              var c2 = e2.substring(o2 + 1), p2 = r2 || this;
              h.call(l2, c2, t2, p2);
            }
            this[n2] = void 0;
          }
        }
        function p(e2, t2) {
          l.apply(this, arguments), this.isInitialized && t2.call(this);
        }
        function f(e2, t2) {
          d.apply(this, arguments);
        }
        function v() {
          var e2 = this._nextObserverId = (this._nextObserverId || 0) + 1, t2 = "_runtimeObserver" + e2, r2 = F.observer.apply(F.observer, arguments);
          return r2.registerOnDefinition(this, t2), r2;
        }
        function y(e2) {
          var t2 = this._metadatas[e2];
          t2 && t2.invalidateForObject && t2.invalidateForObject(this);
        }
        function m(e2) {
          return F.resolvePropertyPathFromObject(this, e2);
        }
        function g(e2, t2) {
          var r2 = e2.lastIndexOf(".");
          if (-1 === r2) return void (this[e2] = t2);
          var i2 = F.resolvePropertyPathFromObject(this, e2.slice(0, r2));
          i2 && (i2[e2.slice(r2 + 1)] = t2);
        }
        function b() {
          for (var e2 = F.objectPool.get(), t2 = 0, r2 = arguments.length; t2 < r2; t2++) {
            var i2 = arguments[t2];
            e2[i2] = this.getPath(i2);
          }
          return e2;
        }
        function _() {
          var e2 = arguments.length, t2 = arguments[e2 - 1], r2 = F.arrayPool.get();
          if (e2 > 1) for (var i2 = 0; i2 < e2 - 1; i2++) r2[i2] = arguments[i2];
          else for (var n2 in t2) Object.prototype.hasOwnProperty.call(t2, n2) && r2.push(n2);
          F.Object.prototype.pauseNotifications();
          for (var a2 = 0, o2 = r2.length; a2 < o2; a2++) {
            var s2 = r2[a2];
            this.setPath(s2, t2[s2]);
          }
          F.Object.prototype.resumeNotifications(), F.arrayPool.ret(r2);
        }
        function P() {
          (this.hasOwnProperty("_triggerPauseStack") ? this._triggerPauseStack : this._triggerPauseStack = F.arrayPool.get()).push(F.arrayPool.get());
        }
        function k() {
          var e2 = this.hasOwnProperty("_triggerPauseStack") && this._triggerPauseStack;
          if (!e2) throw "Unmatched `resumeNotifications` call. Cannot over-resume notifications.";
          var t2 = e2[e2.length - 1];
          T(t2), e2.pop(), F.arrayPool.ret(t2), e2.length || (delete this._triggerPauseStack, F.arrayPool.ret(e2));
        }
        function T(e2) {
          e2.push("IS_FLUSHING");
          for (var t2 = F.objectPool.get(), r2 = 0, i2 = e2.length - 1; r2 < i2; r2 += 3) {
            var n2 = e2[r2], a2 = e2[r2 + 1], o2 = e2[r2 + 2], s2 = F.guidFor(n2) + ":" + a2, u2 = t2[s2];
            void 0 !== u2 && (e2[u2] = null), t2[s2] = o2 ? void 0 : r2;
          }
          F.objectPool.ret(t2);
          for (var l2 = 0, d2 = e2.length - 1; l2 < d2; l2 += 3) {
            var c2 = e2[l2];
            if (c2) {
              var h2 = e2[l2 + 1], p2 = e2[l2 + 2];
              p2 ? (p2.unshift(h2), c2.trigger.apply(c2, p2), F.arrayPool.ret(p2)) : c2.trigger(h2);
            }
          }
        }
        var x = r(47), S = r(20), w = r(19), O = r(44), C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
          return typeof e2;
        } : function(e2) {
          return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
        }, F = {
          mixin: function(e2) {
            for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++) r2[i2 - 1] = arguments[i2];
            for (var n2 = 1, a2 = arguments.length; n2 < a2; n2++) {
              var o2 = arguments[n2];
              if (o2) for (var s2 in o2) o2.hasOwnProperty(s2) && (e2[s2] = o2[s2]);
            }
          },
          instanceOf: function(e2, t2) {
            return !!e2 && (e2.constructor === t2 || F.kindOf(e2.constructor, t2));
          },
          kindOf: function(e2, t2) {
            if (!(e2 && e2.isLPKClass && t2 && t2.isLPKClass)) return false;
            do {
              if (e2 === t2) return true;
            } while (e2 = e2.superclass);
            return false;
          },
          instanceOrKindOf: function(e2, t2) {
            return F.instanceOf(e2, t2) || F.kindOf(e2, t2);
          },
          isHash: function(e2) {
            var t2 = void 0;
            return !("object" !== (void 0 === e2 ? "undefined" : C(e2)) || null === e2 || (t2 = e2.constructor) && t2 !== Object || e2.isLPKObject || e2.isLPKClass);
          },
          arrayPool: x.a,
          mapPool: x.b,
          objectPool: x.c,
          canvasPool: x.d,
          String: O.a,
          Array: {
            mapIntoArray: function(e2, t2, r2) {
              var i2 = e2.length;
              r2.length !== i2 && (r2.length = i2);
              for (var n2 = 0; n2 < i2; n2++) r2[n2] = t2(e2[n2], n2);
              return r2;
            }
          },
          resolvePropertyPathFromObject: function(e2, t2) {
            for (var r2 = t2.indexOf("."), i2 = 0, n2 = e2; -1 !== r2; ) {
              if (!(n2 = n2[t2.substring(i2, r2)])) return;
              i2 = r2 + 1, r2 = t2.indexOf(".", i2);
            }
            return n2[t2.substring(i2)];
          },
          InequalityTests: {
            DEFAULT: function(e2, t2, r2) {
              return e2 !== t2 || Array.isArray(e2) || F.isHash(e2);
            },
            STRICT: function(e2, t2, r2) {
              return e2 !== t2;
            },
            NAN_AWARE: function(e2, t2, r2) {
              return !Object.is(e2, t2);
            }
          },
          guidFor: S.a,
          reusableObject: {},
          emptyArray: [],
          Object: null,
          Metadata: null,
          observer: null,
          MetadataExtension: null,
          metadataExtension: null,
          AccumulatorMetadata: null,
          accumulator: null,
          ObserverMetadata: null,
          Property: null,
          property: null,
          ObservableProperty: null,
          observableProperty: null,
          ProxyProperty: null,
          proxyProperty: null,
          boundFunction: null
        };
        F.Object = {
          staticMembers: {
            isLPKClass: true,
            isLPKObservable: true,
            isInitialized: true,
            create: function() {
              for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
              var i2 = Object.create(this.prototype);
              return i2.constructor = this, i2.init.apply(i2, arguments), i2;
            },
            extend: function() {
              for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
              var n2 = Object.create(this);
              return n2.prototype = Object.create(n2.prototype), Array.prototype.forEach.call(arguments, i, n2), n2.superclass = this, n2.init(), n2;
            },
            init: function() {
            },
            isClassFor: function(e2) {
              var t2 = e2 && e2.constructor;
              return !(!t2 || !this.isSuperclassOf(t2));
            },
            isSuperclassOf: function(e2) {
              var t2 = this;
              if (!(e2 && e2.isLPKClass && t2 && t2.isLPKClass)) return false;
              do {
                if (e2 === t2) return true;
              } while (e2 = e2.superclass);
              return false;
            },
            _super: null,
            _metadatas: {},
            trigger: u,
            _listen: l,
            _observe: p,
            _unlisten: d,
            _unobserve: f,
            observe: v,
            propertyChanged: y,
            pauseNotifications: P,
            resumeNotifications: k,
            getPath: m,
            setPath: g,
            getMultiple: b,
            setMultiple: _
          },
          isLPKObject: true,
          isLPKObservable: true,
          isInitialized: false,
          _metadatas: {},
          init: function(e2) {
            F.mixin(this, e2), this._awakenPropertiesWithAccessors();
          },
          _awakenPropertiesWithAccessors: function() {
            var e2 = F.arrayPool.get(), t2 = this._metadatas;
            do {
              e2.push(t2);
            } while (t2 = Object.getPrototypeOf(t2));
            for (var r2, i2 = F.arrayPool.get(), n2 = F.arrayPool.get(), a2 = F.arrayPool.get(), o2 = F.mapPool.get(), s2 = e2.length - 1; r2 = e2[s2]; s2--) {
              for (var u2 in r2) if (r2.hasOwnProperty(u2)) {
                var l2 = r2[u2];
                if (l2.hasAccessors) {
                  var d2 = this[u2];
                  if (void 0 !== d2) {
                    var c2 = o2.get(l2);
                    void 0 !== c2 && (i2[c2] = n2[c2] = void 0), o2.set(l2, i2.length), i2.push(l2), n2.push(d2);
                  }
                }
              }
              a2.push(i2.length);
            }
            this.isInitialized = true, F.Object.prototype.pauseNotifications();
            for (var h2 = 0, p2 = n2.length; h2 < p2; h2++) {
              var f2 = n2[h2];
              void 0 !== f2 && i2[h2].awakenForObjectWithValue(this, f2);
            }
            F.Object.prototype.resumeNotifications(), F.arrayPool.ret(e2), F.arrayPool.ret(i2), F.arrayPool.ret(n2), F.arrayPool.ret(a2), F.mapPool.ret(o2);
          },
          _super: null,
          trigger: u,
          _listen: l,
          _observe: p,
          _unlisten: d,
          _unobserve: f,
          observe: v,
          propertyChanged: y,
          pauseNotifications: P,
          resumeNotifications: k,
          getPath: m,
          setPath: g,
          getMultiple: b,
          setMultiple: _
        }, F.Object.staticMembers.prototype = F.Object, F.Object = F.Object.staticMembers, delete F.Object.prototype.staticMembers, Object.defineProperty(F.Object, "sharedInstance", {
          get: function() {
            return this.hasOwnProperty("_internalValue_for_sharedInstance") || (this._internalValue_for_sharedInstance = this.create()), this._internalValue_for_sharedInstance;
          },
          set: function() {
            throw "Cannot write to a read-only property.";
          }
        }), F.Metadata = F.Object.extend({
          registerOnDefinition: function(e2, t2) {
            e2._metadatas[t2] = this;
          },
          unregisterFromDefinition: function(e2, t2) {
            e2._metadatas[t2] = void 0;
          }
        }), F.MetadataExtension = F.Metadata.extend({
          init: function(e2) {
            this._super(), this._extensionParams = e2;
          },
          registerOnDefinition: function(e2, t2) {
            e2._metadatas[t2].constructor.extend(this._extensionParams).sharedInstance.registerOnDefinition(e2, t2);
          }
        }), F.metadataExtension = F.MetadataExtension.create.bind(F.MetadataExtension), F.AccumulatorMetadata = F.Metadata.extend({
          init: function(e2) {
            this._super(), this.value = e2;
          },
          registerOnDefinition: function(e2, t2) {
            var r2 = e2[t2];
            e2[t2] = this.accumulateValues(e2, r2, this.value);
          },
          accumulateValues: function(e2, t2, r2) {
            if (Array.isArray(t2) && Array.isArray(r2)) return t2.concat(r2);
            if (t2 && t2.isLPKClass && F.isHash(r2)) return t2.extend(r2);
            if (r2 instanceof Function) return r2.call(e2, t2);
            throw "Cannot use accumulators this way yet.";
          }
        }), F.accumulator = F.AccumulatorMetadata.create.bind(F.AccumulatorMetadata), F.ObserverMetadata = F.Metadata.extend({
          staticMembers: {
            _collector: []
          },
          dependencies: [],
          observerCallback: function() {
            throw "Must specify `observerCallback` on observers.";
          },
          decideRequiresUpdate: F.InequalityTests.DEFAULT,
          init: function() {
            if (F.isHash(arguments[0])) this._super.apply(this, arguments);
            else {
              var e2 = Array.prototype.slice.call(arguments), t2 = e2.pop();
              this._super({
                dependencies: e2,
                observerCallback: t2
              });
            }
          },
          registerOnDefinition: function(e2, t2) {
            this._super.apply(this, arguments), this.keyOnObject = t2;
            var r2 = this;
            this._invokeObserverCallbackIfNeeded = this._invokeObserverCallbackIfNeeded || (this._invokeObserverCallbackIfNeeded = function() {
              var e3 = r2.dependencies, i3 = r2.observerCallback, n3 = r2.constructor._collector;
              n3.length = e3.length;
              var a2 = false;
              r2._shouldForceNextInvocationOfObserverCallback && (r2._shouldForceNextInvocationOfObserverCallback = false, a2 = true);
              for (var o2 = 0; o2 < e3.length; o2++) {
                var s2 = e3[o2], u2 = this.getPath(s2), l2 = "_lastValueSeenByObserver_" + t2 + "_forDependency_" + s2, d2 = this[l2];
                this[l2] = u2, !a2 && r2.decideRequiresUpdate(u2, d2, s2) && (a2 = true), n3[o2] = u2;
              }
              a2 && i3.apply(this, n3), n3.length = 0;
            }), e2[this.keyOnObject] = e2[this.keyOnObject] || (e2[this.keyOnObject] = function() {
              r2._shouldForceNextInvocationOfObserverCallback = true, r2._invokeObserverCallbackIfNeeded.call(this);
            });
            for (var i2 = this.dependencies, n2 = 0; n2 < i2.length; n2++) e2.isInitialized ? e2._observe(i2[n2], this._invokeObserverCallbackIfNeeded) : e2._listen(i2[n2], this._invokeObserverCallbackIfNeeded);
          },
          unregisterFromDefinition: function(e2, t2) {
            this._super.apply(this, arguments);
            for (var r2 = this.dependencies, i2 = 0; i2 < r2.length; i2++) e2._unlisten(r2[i2], this._invokeObserverCallbackIfNeeded);
          }
        }), F.observer = F.ObserverMetadata.create.bind(F.ObserverMetadata), F.Property = F.Metadata.extend({
          staticMembers: {
            extend: function(e2) {
              return 1 !== arguments.length || F.isHash(e2) ? this._super.apply(this, arguments) : this._super({
                defaultValue: e2
              });
            }
          },
          hasAccessors: true,
          readOnly: false,
          defaultValue: void 0,
          get: null,
          set: null,
          keyOnObject: null,
          storageKeyOnObject: null,
          _defaultGetter: function(e2) {
            return e2;
          },
          _defaultSetter: function(e2) {
            return e2;
          },
          _internalGetterForObject: function(e2) {
            return this.get.call(e2, e2[this.storageKeyOnObject]);
          },
          _internalSetterForObject: function(e2, t2) {
            e2[this.storageKeyOnObject] = this.set.call(e2, t2);
          },
          init: function(e2) {
            var t2 = this;
            if (1 !== arguments.length || F.isHash(e2) ? this._super.apply(this, arguments) : this._super({
              defaultValue: e2
            }), this.get || (this.get = this._defaultGetter), this.readOnly) {
              if (this.set) throw "Cannot include both `readOnly` and `set`.";
              this.set = function(e3) {
                if (t2._isAwakeningInReadOnlyMode) return t2._isAwakeningInReadOnlyMode = false, e3;
                throw "Cannot write to a read-only property";
              };
            } else this.set || (this.set = this._defaultSetter);
          },
          registerOnDefinition: function(e2, t2) {
            this._super.apply(this, arguments), this.keyOnObject = t2;
            var r2 = this.storageKeyOnObject = "_internalValue_for_" + t2;
            this._internalGetterForObject = this._internalGetterForObject.bind(this), this._internalSetterForObject = this._internalSetterForObject.bind(this);
            var i2 = this;
            Object.defineProperty(e2, t2, {
              get: function() {
                return this.isInitialized ? i2._internalGetterForObject(this) : this[r2];
              },
              set: function(e3) {
                if (!this.isInitialized) return void (this[r2] = e3);
                i2._internalSetterForObject(this, e3);
              }
            }), e2[t2] = this.defaultValue;
          },
          unregisterFromDefinition: function(e2, t2) {
            F.reusableObject[t2] = void 0;
            var r2 = Object.getOwnPropertyDescriptor(F.reusableObject, t2);
            delete F.reusableObject[t2], Object.defineProperty(e2, t2, r2), delete e2["_internalValue_for_" + t2], this._super.apply(this, arguments);
          },
          awakenForObjectWithValue: function(e2, t2) {
            this.readOnly && (this._isAwakeningInReadOnlyMode = true), t2 instanceof Function && (t2 = t2.call(e2)), e2[this.keyOnObject] = t2;
          }
        }), F.property = F.Property.extend.bind(F.Property), F.ObservableProperty = F.Property.extend({
          isCacheable: false,
          dependencies: [],
          writeDependencies: [],
          decideRequiresUpdate: F.InequalityTests.DEFAULT,
          _internalSetterForObject: function(e2) {
            this._super.apply(this, arguments), this.invalidateForObject(e2);
          },
          _internalGetterForObject: function(e2) {
            if (!this.isCacheable) return this._super.apply(this, arguments);
            var t2 = this.cacheExistenceKeyOnObject;
            if (e2[t2]) return e2[this.cacheStorageKeyOnObject];
            var r2 = this._super.apply(this, arguments);
            return e2[t2] = true, e2[this.cacheStorageKeyOnObject] = r2, r2;
          },
          invalidateForObject: function(e2) {
            e2[this.cacheExistenceKeyOnObject] = false, e2[this.cacheStorageKeyOnObject] = void 0, e2.trigger(this.keyOnObject);
          },
          registerOnDefinition: function(e2, t2) {
            this._super.apply(this, arguments);
            var r2 = this;
            this.cacheStorageKeyOnObject = "_cacheStorageForProperty_" + t2, this.cacheExistenceKeyOnObject = "_cacheExistenceForProperty_" + t2, F.observer({
              dependencies: this.dependencies,
              observerCallback: function() {
                r2.invalidateForObject(this);
              },
              decideRequiresUpdate: this.decideRequiresUpdate
            }).registerOnDefinition(e2, "_dependencyObserverForProperty_" + t2), this.didChange && F.observer({
              dependencies: [t2],
              observerCallback: this.didChange,
              decideRequiresUpdate: this.decideRequiresUpdate
            }).registerOnDefinition(e2, "_didChangeObserverForProperty_" + t2);
          }
        }), F.observableProperty = F.ObservableProperty.extend.bind(F.ObservableProperty), F.ProxyProperty = F.ObservableProperty.extend({
          proxyPath: null,
          decode: function(e2) {
            return e2;
          },
          encode: function(e2) {
            return e2;
          },
          init: function(e2) {
            var t2 = "string" == typeof e2 ? e2 : e2.proxyPath;
            if (!t2) throw "A proxyPath must be configured on a ProxyProperty.";
            this.dependencies = [t2];
            var r2 = this;
            this.get = function() {
              return r2.decode(this.getPath(r2.proxyPath));
            }, e2 && e2.readOnly || (this.set = function(e3) {
              this.setPath(r2.proxyPath, r2.encode(e3));
            }), "string" == typeof e2 ? this._super({
              proxyPath: e2
            }) : this._super.apply(this, arguments);
          }
        }), F.proxyProperty = F.ProxyProperty.create.bind(F.ProxyProperty), F.boundFunction = function(e2) {
          return F.property(function() {
            return e2.bind(this);
          });
        }, t.a = F;
      }, function(e, t, r) {
        r.d(t, "a", function() {
          return i;
        });
        var i = {
          default: "full",
          FULL: "full",
          HINT: "hint",
          LOOP: "loop"
        };
      }, function(e, t, r) {
        function i(e2, t2) {
          if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        }
        var n = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var r2 = 0; r2 < t2.length; r2++) {
              var i2 = t2[r2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, r2, i2) {
            return r2 && e2(t2.prototype, r2), i2 && e2(t2, i2), t2;
          };
        }(), a = navigator.userAgent.toLowerCase(), o = /\sedge\//.test(a), s = function() {
          function e2() {
            i(this, e2);
          }
          return n(e2, null, [{
            key: "isEdge",
            get: function() {
              return o;
            }
          }, {
            key: "isChrome",
            get: function() {
              return e2._isChrome;
            }
          }, {
            key: "isSafari",
            get: function() {
              return e2._isSafari;
            }
          }, {
            key: "isFirefox",
            get: function() {
              return e2._isFirefox;
            }
          }, {
            key: "isIE",
            get: function() {
              return e2._isIE;
            }
          }, {
            key: "isIOS",
            get: function() {
              if (e2._isIOS) return true;
              var t2 = window.top, r2 = t2.document;
              return !(!e2._macLike || !("ontouchstart" in t2 || "createTouch" in r2));
            }
          }]), e2;
        }();
        t.a = s, s._isChrome = !s.isEdge && /chrome/.test(a), s._isSafari = !s.isEdge && !s.isChrome && /safari/.test(a), s._isFirefox = !s.isEdge && !s.isChrome && !s.isSafari && /firefox/.test(a), s._isIE = !s.isEdge && !s.isChrome && !s.isSafari && !s.isFirefox && /trident|msie/.test(a), s._isIOS = !!navigator.userAgent.match(/\b(iPad|iPhone|iPod)\b.*\bOS \d+_\d+/i), s._macLike = /mac/i.test(navigator.userAgent) && !/like mac/i.test(navigator.userAgent);
      }, function(e, t, r) {
        var i = r(10), n = r(1);
        r.d(t, "a", function() {
          return a;
        });
        var a = {
          _mappingToLocalizedStrings: {
            live: "Live",
            get bounce() {
              return i.a.getString("VideoEffects.Badge.Title.Bounce");
            },
            get exposure() {
              return i.a.getString("VideoEffects.Badge.Title.LongExposure");
            },
            get loop() {
              return i.a.getString("VideoEffects.Badge.Title.Loop");
            }
          },
          _mappingToPlaybackStyle: {
            bounce: n.a.LOOP,
            exposure: n.a.FULL,
            live: n.a.FULL,
            loop: n.a.LOOP
          },
          default: "live",
          BOUNCE: "bounce",
          EXPOSURE: "exposure",
          LIVE: "live",
          LOOP: "loop",
          toBadgeText: function(e2) {
            return this.toLocalizedString(e2).toLocaleUpperCase();
          },
          toLocalizedString: function(e2) {
            return this._mappingToLocalizedStrings[e2 || a.default];
          },
          toPlaybackStyle: function(e2) {
            return this._mappingToPlaybackStyle[e2 || n.a.default];
          }
        };
      }, function(e, t, r) {
        function i(e2, t2, r2) {
          return t2 in e2 ? Object.defineProperty(e2, t2, {
            value: r2,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e2[t2] = r2, e2;
        }
        var n = r(0), a = r(7), o = r(39), s = r(38), u = r(40), l = r(9), d = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = arguments[t2];
            for (var i2 in r2) Object.prototype.hasOwnProperty.call(r2, i2) && (e2[i2] = r2[i2]);
          }
          return e2;
        }, c = n.a.Object.extend({
          layerName: null,
          renderLayerClass_dom: null,
          renderLayerMixin: {},
          init: function(e2) {
            this._super(), this.renderLayerMixin = e2;
          },
          getRenderLayer: function(e2, t2) {
            return this["renderLayerClass_" + e2.approach].extend(this.renderLayerMixin, {
              layerName: this.layerName
            }).create(e2, t2);
          }
        }), h = c.extend({
          renderLayerClass_dom: o.a
        }), p = c.extend({
          renderLayerClass_dom: s.a
        }), f = c.extend({
          renderLayerClass_dom: u.a
        }), v = n.a.Object.extend({
          staticMembers: {
            PhotoIngredient: h,
            InterpolatedVideoIngredient: p,
            VideoIngredient: f,
            computedStyle: a.a.computedStyle,
            getRecipeFromPlaybackStyle: function(e2) {
              return this._recipesByPlaybackStyle[e2];
            },
            registerRecipeWithPlaybackStyle: function(e2, t2) {
              this._recipesByPlaybackStyle = d({}, this._recipesByPlaybackStyle, i({}, t2, e2));
            }
          },
          correspondingPlaybackStyle: null,
          get name() {
            return "recipe_for_playbackStyle_" + this.correspondingPlaybackStyle;
          },
          minimumShortenedDuration: 0,
          spontaneousFinishDuration: 0,
          ingredients: null,
          requiresInterpolation: false,
          init: function(e2) {
            this.ingredients = [], this._super();
            for (var t2 in e2) if (e2.hasOwnProperty(t2)) {
              var r2 = e2[t2];
              this[t2] = r2, c.isClassFor(r2) && (r2.layerName = t2, this.ingredients.push(r2));
            }
            this.correspondingPlaybackStyle && v.registerRecipeWithPlaybackStyle(this, this.correspondingPlaybackStyle);
          },
          getRenderLayers: function(e2) {
            for (var t2, r2 = [], i2 = 0; t2 = this.ingredients[i2]; i2++) t2.isDisabled || r2.push(t2.getRenderLayer(e2, this));
            return r2;
          },
          beginFinishingPlaybackEarly: function(e2) {
            if (!e2.isPlaying) return void (e2.wantsToPlay = false);
            e2.duration = Math.min(e2.duration, Math.max(this.minimumShortenedDuration, e2.currentTime + this.spontaneousFinishDuration));
          },
          calculateAnimationDuration: function(e2, t2, r2) {
            return t2 || 0;
          },
          continuePlayback: function(e2) {
            e2.currentTime < e2.duration ? e2._rafID = requestAnimationFrame(e2._nextFrame.bind(e2)) : (e2.stop(), e2.dispatchEvent(r.i(l.f)()));
          },
          register: function() {
          },
          requestMoreCompatibleRecipe: function() {
            return this;
          }
        });
        t.a = v;
      }, function(e, t, r) {
        var i = r(12), n = {
          debug: function(e2) {
            for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
            i.a && console.debug.apply(console, arguments);
          },
          log: function(e2) {
            for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
            i.a && console.log.apply(console, arguments);
          },
          info: function(e2) {
            for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
            i.a && console.info.apply(console, arguments);
          },
          warn: function(e2) {
            for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++) r2[i2 - 1] = arguments[i2];
            console.warn.apply(console, arguments);
          },
          error: function(e2) {
            for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++) r2[i2 - 1] = arguments[i2];
            console.error.apply(console, arguments);
          }
        };
        t.a = n;
      }, function(e, t, r) {
        r.d(t, "a", function() {
          return i;
        });
        var i;
        !function(e2) {
          e2[e2.FAILED_TO_DOWNLOAD_RESOURCE = 0] = "FAILED_TO_DOWNLOAD_RESOURCE", e2[e2.PHOTO_FAILED_TO_LOAD = 1] = "PHOTO_FAILED_TO_LOAD", e2[e2.VIDEO_FAILED_TO_LOAD = 2] = "VIDEO_FAILED_TO_LOAD";
        }(i || (i = {}));
      }, function(e, t, r) {
        var i = r(8), n = r(0), a = i.a.extend({
          _hasBeenDisposed: false,
          staticMembers: {
            computedStyle: function(e2) {
              return e2._lpk_isComputedStyle = true, e2;
            }
          },
          recipe: n.a.observableProperty(),
          renderer: n.a.observableProperty(),
          duration: n.a.proxyProperty("renderer.duration"),
          canRender: n.a.observableProperty(false),
          computedStyles: n.a.property(function() {
            return [];
          }),
          displayWidth: 0,
          displayHeight: 0,
          shouldLoop: false,
          init: function(e2, t2) {
            this.renderer = e2, this.recipe = t2, this._super();
            for (var r2 in this) {
              var i2 = this[r2];
              i2 && i2._lpk_isComputedStyle && this.computedStyles.push({
                styleKey: r2,
                getter: i2
              });
            }
          },
          updateSize: function(e2, t2) {
            if (!arguments.length) return this.updateSize(this.displayWidth, this.displayHeight);
            this.displayWidth = e2, this.displayHeight = t2;
          },
          setUpForRender: function() {
          },
          tearDownFromRender: function() {
            this.reduceMemoryFootprint();
          },
          reduceMemoryFootprint: function() {
          },
          _canRenderDidChange: n.a.observer("canRender", "renderer._lastRecipe", function(e2, t2) {
            var r2 = this.recipe, i2 = this.renderer;
            this._hasBeenDisposed || (!e2 || !t2 || t2 !== r2 && i2._hasInitialized ? this.tearDownFromRender() : (i2._hasInitialized = true, this.setUpForRender(), this.updateSize()));
          }),
          prepareToRenderAtTime: function() {
            return true;
          },
          canRenderAtTime: function() {
            return true;
          },
          renderAtTime: function(e2) {
            if (!arguments.length) return this.renderAtTime(this._lastRenderedTime);
            this._lastRenderedTime = e2;
            for (var t2, r2 = 0; t2 = this.computedStyles[r2]; r2++) t2.value = t2.getter.call(this, e2);
            this.renderStyles(this.computedStyles);
          },
          renderStyles: function(e2) {
          },
          dispose: function() {
            this.detach(), this._hasBeenDisposed = true;
          }
        });
        t.a = a;
      }, function(e, t, r) {
        var i = r(0), n = i.a.Object.extend({
          element: null,
          _lpk_isView: true,
          tagName: "div",
          eventDispatchingElement: null,
          init: function(e2) {
            e2 ? this.element = e2 : this.tagName && (this.element = document.createElement(this.tagName)), this._super();
          },
          attachInto: function(e2, t2, r2) {
            if (!this.element) return void (this.parentView = e2);
            t2 || (t2 = e2.element), r2 && r2._lpk_isView && (r2 = r2.element), r2 ? t2.insertBefore(this.element, r2) : t2.appendChild(this.element), this.parentView = e2;
          },
          detach: function() {
            this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.parentView = null;
          },
          dispatchEvent: function(e2) {
            var t2 = this.eventDispatchingElement || this.element;
            if (!t2) throw "Cannot dispatch an event from a view with no DOM element.";
            t2.dispatchEvent.call(t2, e2);
          },
          parentView: i.a.observableProperty(null)
        });
        t.a = n;
      }, function(e, t, r) {
        function i(e2) {
          return function(t2) {
            return new CustomEvent(e2, {
              detail: t2
            });
          };
        }
        var n = r(14);
        r.d(t, "a", function() {
          return a;
        }), r.d(t, "b", function() {
          return o;
        }), r.d(t, "f", function() {
          return s;
        }), r.d(t, "e", function() {
          return u;
        }), r.d(t, "c", function() {
          return l;
        }), r.d(t, "d", function() {
          return d;
        }), function() {
          function e2(e3, t2) {
            t2 = t2 || {
              bubbles: false,
              cancelable: false,
              detail: void 0
            };
            var r2 = document.createEvent("CustomEvent");
            return r2.initCustomEvent(e3, t2.bubbles, t2.cancelable, t2.detail), r2;
          }
          if ("function" == typeof window.CustomEvent) return false;
          e2.prototype = window.Event.prototype, window.CustomEvent = e2;
        }();
        var a = i(n.a.LIVEPHOTOSKIT_LOADED), o = i("canplay"), s = i("ended"), u = i("error"), l = i("photoload"), d = i("videoload");
      }, function(e, t, r) {
        var i = r(0), n = ["ar-sa", "ca-cs", "cs-cz", "da-dk", "nl-nl", "pt-br", "pt-pt", "no-no", "el-gr", "en-us", "fi-fi", "fr-fr", "de-de", "he-il", "hr-hr", "hu-hu", "id-id", "it-it", "ja-jp", "ko-kr", "ms-my", "pl-pl", "ro-ro", "ru-ru", "zh-cn", "zh-tw", "sk-sk", "es-es", "sv-se", "th-th", "tr-tr", "uk-ua", "vi-vi"], a = {
          "es-419": "es-es",
          pt: "pt-pt",
          no: "no-no",
          nb: "no-no",
          nn: "no-no",
          zh: "zh-cn",
          "zh-Hans": "zh-cn",
          "zh-Hant": "zh-tw",
          "zh-HK": "zh-tw",
          "zh-MO": "zh-tw",
          "zh-SG": "zh-cn"
        }, o = {};
        for (var s in a) {
          var u = a[s], l = o[u] || [];
          o[u] = [].concat(function(e2) {
            if (Array.isArray(e2)) {
              for (var t2 = 0, r2 = Array(e2.length); t2 < e2.length; t2++) r2[t2] = e2[t2];
              return r2;
            }
            return Array.from(e2);
          }(l), [s]);
        }
        for (var d = {}, c = 0; c < n.length; c++) {
          var h = n[c];
          try {
            var p = r(21)("./" + h + ".lproj/strings.json"), f = h.split("-")[0], v = o[h];
            if (d[h] = p, d[f] || (d[f] = p), v) for (var y in v) d[y] = p;
          } catch (e2) {
          }
        }
        var m = function(e2) {
          var t2 = g.locale, r2 = g.strings;
          return (r2[t2] || r2["en-us"])[e2] || "";
        }, g = i.a.Object.extend({
          locale: i.a.observableProperty({
            get: function(e2) {
              return e2 || window.navigator.language;
            },
            set: function(e2) {
              return e2;
            }
          }),
          getString: m,
          strings: d
        }).create();
        t.a = g;
      }, function(e, t, r) {
        function i(e2, t2) {
          if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        }
        function n(e2) {
          var t2 = parseFloat(e2);
          if (+t2 === t2) return t2;
          var r2 = "true" === e2 || "false" !== e2 && void 0;
          return !!r2 === r2 ? r2 : e2;
        }
        var a = r(27), o = r(0), s = r(5), u = r(1), l = r(3), d = r(12);
        r.d(t, "a", function() {
          return _;
        }), r.d(t, "b", function() {
          return P;
        }), r.d(t, "c", function() {
          return k;
        });
        var c = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = arguments[t2];
            for (var i2 in r2) Object.prototype.hasOwnProperty.call(r2, i2) && (e2[i2] = r2[i2]);
          }
          return e2;
        }, h = "property", p = {
          play: "method",
          pause: "method",
          stop: "method",
          toggle: "method",
          beginFinishingPlaybackEarly: "method",
          isPlaying: "read_only_property",
          wantsToPlay: "read_only_property",
          currentTime: "read_only_property",
          renderedTime: "read_only_property",
          duration: "read_only_property",
          autoplay: h,
          caption: h,
          playbackStyle: h,
          preloadedEffectType: h,
          updateSize: "method",
          photoWidth: "read_only_property",
          photoHeight: "read_only_property",
          videoWidth: "read_only_property",
          videoHeight: "read_only_property",
          effectType: h,
          proactivelyLoadsVideo: h,
          photoSrc: h,
          photoMimeType: h,
          videoSrc: h,
          videoMimeType: h,
          metadataVideoSrc: h,
          photo: h,
          video: h,
          photoTime: h,
          frameTimes: h,
          videoRotation: h,
          canPlay: "read_only_property",
          loadProgress: "read_only_property",
          errors: "read_only_property",
          showsNativeControls: h,
          observe: "method"
        };
        delete p.observe;
        var f = function() {
          var e2 = [];
          for (var t2 in p) p.hasOwnProperty(t2) && e2.push(t2);
          return e2;
        }(), v = {}, y = f.map(function(e2) {
          var t2 = "data-" + o.a.String.hyphenate(e2);
          return v[t2] = e2, t2;
        }), m = f.map(function(e2) {
          return p[e2];
        }), g = {
          enumerable: false,
          configurable: false,
          writable: false
        }, b = {
          enumerable: false,
          configurable: false
        }, _ = function(e2, t2) {
          if (!e2) return s.a.warn("LivePhotosKit.augmentElementAsPlayer requires a target element to augment."), null;
          if ("IMG" === e2.tagName) {
            var r2 = document.createElement("div"), i2 = e2.parentNode, _2 = e2.getAttribute("src"), P2 = e2.getAttribute("photo-src") || _2;
            e2.removeAttribute("src"), e2.setAttribute("data-photo-src", P2);
            for (var k2 = e2.attributes, x = 0; x < k2.length; x++) {
              var S = k2[x], w = S.nodeName, O = S.value;
              r2.setAttribute(w, O);
            }
            i2.insertBefore(r2, e2), i2.removeChild(e2), e2 = r2;
          }
          var C = void 0, F = void 0, R = e2;
          if (R.__isLPKPlayer__) return R;
          g.value = true, Object.defineProperty(R, "__isLPKPlayer__", g);
          var L = function() {
            var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            d.a && !e3.videoSrc && e3.photoSrc ? s.a.warn("Changing a `photoSrc` independent of its `videoSrc` can result in unexpected behavior") : d.a && e3.videoSrc && !e3.photoSrc && s.a.warn("Changing a `videoSrc` independent of its `photoSrc` can result in unexpected behavior");
            var t3 = F ? {
              photoSrc: F.photo,
              videoSrc: F.videoSrc,
              effectType: F.effectType,
              autoplay: F.autoplay,
              proactivelyLoadsVideo: F.proactivelyLoadsVideo
            } : {}, r3 = c({}, t3, e3), i3 = (r3.photoSrc, r3.videoSrc, r3.effectType), n2 = r3.autoplay, f2 = r3.proactivelyLoadsVideo;
            C = o.a.objectPool.get(), r3.preloadedEffectType = i3, r3.autoplay = false !== n2;
            var v2 = i3 || l.a.default;
            l.a.toPlaybackStyle(v2) === u.a.LOOP && r3.autoplay && (d.a && !f2 && s.a.warn("When using a looping asset you should set `proactivelyLoadsVideo` to `true` unless `autoplay` is also set to `false`"), r3.proactivelyLoadsVideo = true);
            for (var y2 in r3) Object.prototype.hasOwnProperty.call(r3, y2) && (p[y2] === h ? C[y2] = r3[y2] : s.a.warn("LivePhotosKit.Player: Initial configuration for `" + y2 + "` was ignored, because the property is not a writable property."));
            if (F) for (var m2 in C) {
              var g2 = C[m2];
              F[m2] = g2;
            }
            else F = a.a.create(R, C);
            o.a.objectPool.ret(C), C = null;
          };
          R.setProperties = L, R.setProperties(t2);
          for (var E, A, I = 0; (E = f[I]) && (A = m[I]); I++) !function(e3, t3, r3) {
            "method" === r3 ? (g.value = F[t3].bind(F), Object.defineProperty(R, t3, g)) : (b.set = r3 === h ? function(e4) {
              F[t3] = e4;
            } : function() {
            }, b.get = function() {
              return F[t3];
            }, Object.defineProperty(R, t3, b));
          }(0, E, A);
          g.value = function() {
            var e3 = arguments.length, t3 = arguments[e3 - 1];
            if (e3 < 1 || !(t3 instanceof Function)) throw new Error("Invalid arguments passed to `observe`. Form: key, [key, …], callback.");
            for (var r3 = o.a.arrayPool.get(), i3 = 0, n2 = e3; i3 < n2; i3++) r3[i3] = arguments[i3];
            for (var a2 = 0, s2 = e3 - 1; a2 < s2; a2++) {
              var u2 = p[r3[a2]];
              if (u2 !== h && "read_only_property" !== u2) throw new Error("Can't observe non-observable property '" + r3[a2] + "'.");
            }
            r3[e3 - 1] = t3.bind(this);
            var l2 = F.observe.apply(F, r3);
            return o.a.arrayPool.ret(r3), new T(l2, F);
          }, Object.defineProperty(R, "observe", g);
          for (var E, A, D, I = 0; (E = f[I]) && (A = m[I]) && (D = y[I]); I++) if (A === h) {
            var M = R.getAttribute(D);
            M && ("effectType" === E ? F.preloadedEffectType = n(M) : F[E] = n(M));
          }
          var j = R.setAttribute;
          g.value = function(e3, t3) {
            var r3 = v[e3];
            if (!r3) return void j.apply(this, arguments);
            this[r3] = n(t3);
          }, Object.defineProperty(R, "setAttribute", g);
          var U = R.removeAttribute;
          g.value = function(e3) {
            var t3 = v[e3];
            if (!t3) return U.apply(this, arguments);
            this[t3] = null;
          }, Object.defineProperty(R, "removeAttribute", g);
          for (var V, N, B, z = 0; (V = f[z]) && (N = m[z]) && (B = y[z]); z++) {
            (function(e3, t3, r3, i3) {
              if (r3 !== h && "read_only_property" !== r3) return "continue";
              R.observe(t3, function(e4) {
                void 0 === e4 || null === e4 || "string" != typeof e4 && +e4 !== e4 && "boolean" != typeof e4 ? U.call(this, i3) : j.call(this, i3, String(e4));
              });
            })(0, V, N, B);
          }
          return "" !== R.getAttribute("data-live-photo") && R.setAttribute("data-live-photo", ""), g.value = F, Object.defineProperty(R, "__internalLPKPlayer__", g), g.value = void 0, b.set = b.get = void 0, R;
        }, P = function(e2) {
          var t2 = document.createElement("div");
          return _(t2, e2);
        }, k = function(e2, t2) {
          if (arguments.length >= 3 || "string" == typeof arguments[0] && "string" == typeof arguments[1]) throw new Error("LivePhotosKit.Player: Creating a new Player using arguments of the form 'photoSrc, videoSrc, [targetElement, [options]]' is no longer supported. Instead, use the new signature, '[targetElement, [options]]");
          return s.a.warn("The `LivePhotosKit.Player` method will be deprecated in an upcoming release. Please use the `LivePhotosKit.augementElementAsPlayer` or `LivePhotosKit.createPlayer` methods, instead."), e2 ? _(e2, t2) : P(t2);
        }, T = function e2(t2, r2) {
          i(this, e2), this.fire = function() {
            r2[t2.keyOnObject]();
          }, this.disconnect = function() {
            t2.unregisterFromDefinition(r2);
          }, this.connect = function() {
            t2.registerOnDefinition(r2);
          };
        };
      }, function(e, t, r) {
        var i = /_lpk_debug=true/i;
        t.a = i.test(window.location.search) || i.test(window.location.hash);
      }, function(e, t, r) {
        var i = {
          setUpForRender: function() {
            this.attachInto(this.renderer);
          },
          tearDownFromRender: function() {
            this.detach(), this._super();
          },
          renderStyles: function(e2) {
            for (var t2, r2 = this.element, i2 = r2.style, n = 0; t2 = e2[n]; n++) {
              var a = t2, o = a.styleKey, s = a.value;
              i2[o] !== s && (i2[o] = s);
            }
          }
        };
        t.a = i;
      }, function(e, t, r) {
        var i = r(55), n = r(56), a = r(57);
        t.a = {
          APP_NAME: "LivePhotosKit",
          BUILD_NUMBER: i.a,
          MASTERING_NUMBER: n.a,
          FEEDBACK_URL_PREFIX: "https://feedbackws.icloud.com",
          LIVEPHOTOSKIT_LOADED: "livephotoskitloaded",
          URL_PREFIX: "https://cdn.apple-livephotoskit.com",
          VERSION: a.a
        };
      }, function(e, t, r) {
        function i(e2, t2) {
          if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        }
        var n = r(3), a = r(50), o = r(18), s = r(10), u = r(1);
        r.d(t, "a", function() {
          return c;
        });
        var l = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var r2 = 0; r2 < t2.length; r2++) {
              var i2 = t2[r2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, r2, i2) {
            return r2 && e2(t2.prototype, r2), i2 && e2(t2, i2), t2;
          };
        }(), d = {
          element: null,
          label: "",
          labelPadding: 6,
          leftPadding: 5,
          height: 25,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          itemColor: "rgb(0, 0, 0)",
          fontSize: 9,
          borderRadius: 5,
          dottedRadius: 8.5,
          innerRadius: 5.25,
          zIndex: 4,
          shouldAnimateProgressRing: true,
          progressRingAnimationSpeed: 300,
          shouldAddEventListeners: true,
          effectType: null,
          playbackStyle: null,
          configurePlayAction: r.i(a.a)(),
          configureStopAction: r.i(a.a)()
        }, c = function() {
          function e2() {
            var t2 = this, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, e2), this._setInstanceProps(r2), this._createCanvas(), this.redraw(), this._addEventListeners(), s.a.observe("locale", function() {
              return t2.updateBadgeText();
            });
          }
          return l(e2, [{
            key: "attachPlayerInstance",
            value: function(e3) {
              e3.attachBadgeView(this), this.updateBadgeText(e3.effectType);
            }
          }, {
            key: "redraw",
            value: function() {
              var e3 = this.progress;
              e3 > 0 && this.shouldAnimateProgressRing ? this._animateProgressRing() : this._redraw(e3);
            }
          }, {
            key: "reset",
            value: function() {
              var e3 = this._requestedFrame;
              e3 && cancelAnimationFrame(e3), this._progress = 0, this._previousProgress = 0, this.redraw();
            }
          }, {
            key: "appendTo",
            value: function(e3) {
              e3.appendChild(this.element);
            }
          }, {
            key: "updateAriaLabel",
            value: function() {
              var e3 = n.a.toLocalizedString(this.effectType), t2 = s.a.getString("VideoEffects.Badge");
              this.element.setAttribute("aria-label", t2 + ": " + e3);
            }
          }, {
            key: "updateBadgeText",
            value: function(e3) {
              e3 ? this.effectType = e3 : e3 = this.effectType, this.label = e3 ? n.a.toBadgeText(e3) : "", this.playbackStyle = n.a.toPlaybackStyle(e3), this.updateAriaLabel(), this._redraw();
            }
          }, {
            key: "_createCanvas",
            value: function() {
              var e3 = this.element;
              if (e3) {
                if ("canvas" !== e3.tagName.toLowerCase()) throw new Error("Backing element for LivePhotoBadge needs to be an HTMLCanvasElement.");
              } else e3 = this.element = document.createElement("canvas");
              e3.setAttribute("role", "button"), this.updateAriaLabel(), e3.classList.add("lpk-badge"), this._context = e3.getContext("2d");
            }
          }, {
            key: "_setCanvasSize",
            value: function() {
              var e3 = this.element, t2 = o.a(), r2 = this.height, i2 = this.width;
              e3.height = r2 * t2, e3.width = i2 * t2, e3.style.height = r2 + "px", e3.style.width = i2 + "px";
            }
          }, {
            key: "_setInstanceProps",
            value: function(e3) {
              var t2 = {};
              for (var r2 in d) t2.hasOwnProperty.call(d, r2) && (this[r2] = e3.hasOwnProperty(r2) ? e3[r2] : d[r2]);
              this.defaultProps = d;
            }
          }, {
            key: "_redraw",
            value: function() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t2 = (this.element, this.label), r2 = t2.toLowerCase() || n.a.default;
              this._setCanvasSize(), this._context.clearRect(0, 0, this.width, this.height), this._drawBackground(), this._drawLabel(), this.shouldShowError || (this._drawInnerCircle(), n.a.toPlaybackStyle(r2) !== u.a.LOOP ? this._drawPlayArrow() : this._drawLoopCircle()), this.shouldShowError ? (this._drawProgressRing(1), this._drawErrorSlash()) : this.progress > 0 ? this._drawProgressRing(e3) : this._drawDottedCircle();
            }
          }, {
            key: "_drawBackground",
            value: function() {
              var e3 = o.a(), t2 = this._context, r2 = this.borderRadius * e3, i2 = this.width * e3, n2 = this.height * e3;
              t2.beginPath(), t2.moveTo(r2, 0), t2.lineTo(i2 - r2, 0), t2.quadraticCurveTo(i2, 0, i2, r2), t2.lineTo(i2, n2 - r2), t2.quadraticCurveTo(i2, n2, i2 - r2, n2), t2.lineTo(r2, n2), t2.quadraticCurveTo(0, n2, 0, n2 - r2), t2.lineTo(0, r2), t2.quadraticCurveTo(0, 0, r2, 0), t2.closePath(), t2.fillStyle = this.backgroundColor, t2.fill();
            }
          }, {
            key: "_drawDottedCircle",
            value: function() {
              for (var t2 = e2.numberOfDots, r2 = this.dottedRadius * o.a(), i2 = 0; i2 < t2; i2++) {
                var n2 = this.x0 + r2 * Math.cos(2 * Math.PI * i2 / t2), a2 = this.y0 + r2 * Math.sin(2 * Math.PI * i2 / t2);
                this._drawDot(n2, a2);
              }
            }
          }, {
            key: "_drawDot",
            value: function(e3, t2) {
              var r2 = this._context, i2 = 1 === o.a() ? 1 : 1.25;
              r2.beginPath(), r2.arc(e3, t2, i2, 0, 2 * Math.PI), r2.fillStyle = this.itemColor, r2.fill();
            }
          }, {
            key: "_drawInnerCircle",
            value: function() {
              var e3 = o.a(), t2 = this._context, r2 = this.innerRadius * e3;
              t2.beginPath(), t2.arc(this.x0, this.y0, r2, 0, 2 * Math.PI), t2.lineWidth = 1 === e3 ? 1.25 : 1.5, t2.strokeStyle = this.itemColor, t2.stroke();
            }
          }, {
            key: "_drawPlayArrow",
            value: function() {
              var e3 = o.a(), t2 = this._context, r2 = 5 * e3, i2 = 4 * e3, n2 = this.x0 + 0.5 * e3, a2 = this.y0;
              t2.beginPath(), t2.moveTo(n2 - i2 / 2, a2 - r2 / 2), t2.lineTo(n2 + i2 / 2, a2), t2.lineTo(n2 - i2 / 2, a2 + r2 / 2), t2.fillStyle = this.itemColor, t2.fill();
            }
          }, {
            key: "_drawLoopCircle",
            value: function() {
              var e3 = o.a(), t2 = this._context, r2 = 2 * e3;
              t2.beginPath(), t2.arc(this.x0, this.y0, r2, 0, 2 * Math.PI), t2.fillStyle = this.itemColor, t2.fill();
            }
          }, {
            key: "_drawLabel",
            value: function() {
              var e3 = o.a(), t2 = this._context, r2 = (this.leftPadding + 2 * this.dottedRadius + this.labelPadding) * e3, i2 = (this.height / 2 + 4.5) * e3;
              t2.fillStyle = this.itemColor, t2.font = this.fontStyle, t2.fillText(this.label, r2, i2);
            }
          }, {
            key: "_drawProgressRing",
            value: function(e3) {
              var t2 = o.a(), r2 = this._context, i2 = this.dottedRadius * t2, n2 = 2 * Math.PI * 0.75, a2 = (0.75 + e3) * (2 * Math.PI);
              r2.beginPath(), r2.arc(this.x0, this.y0, i2, n2, a2, false), r2.lineWidth = 1.5 * t2, r2.strokeStyle = this.itemColor, r2.stroke();
            }
          }, {
            key: "_drawErrorSlash",
            value: function() {
              var e3 = o.a(), t2 = this._context, r2 = this.dottedRadius * e3, i2 = r2 * Math.sqrt(2) / 2;
              t2.beginPath(), t2.moveTo(this.x0 + i2, this.y0 + i2), t2.lineTo(this.x0 - i2, this.y0 - i2), t2.lineWidth = 1.5 * e3, t2.strokeStyle = this.itemColor, t2.stroke();
            }
          }, {
            key: "_animateProgressRing",
            value: function() {
              var e3 = this, t2 = this.progress, r2 = this._previousProgress || 0, i2 = Math.abs(t2 - r2), n2 = t2 < r2;
              n2 && (t2 = r2, r2 = this.progress);
              for (var a2 = i2 * this.progressRingAnimationSpeed, o2 = a2 / (1e3 / 60), s2 = i2 / o2, u2 = [], l2 = 0, d2 = o2; l2 < d2; l2++) u2.push(r2 + l2 * s2);
              u2[u2.length - 1] = t2, n2 && u2.reverse();
              !function t3() {
                var r3 = u2.shift();
                e3._redraw(r3), u2.length && (e3._requestedFrame = window.requestAnimationFrame(t3)), 1 === r3 && window.setTimeout(function() {
                  e3.progress = 0;
                }, 0.25 * e3.progressRingAnimationSpeed);
              }();
            }
          }, {
            key: "_addEventListeners",
            value: function() {
              var e3 = this, t2 = this.element, r2 = void 0;
              t2.addEventListener("mouseup", function() {
                r2 = window.setTimeout(function() {
                  e3.configurePlayAction();
                }, 0);
              }), t2.addEventListener("mouseenter", function() {
                r2 = window.setTimeout(function() {
                  e3.configurePlayAction();
                }, 0);
              }), t2.addEventListener("mouseleave", function() {
                r2 && window.clearTimeout(r2), e3.configureStopAction();
              });
            }
          }, {
            key: "width",
            get: function() {
              var e3 = this._context;
              if (!e3) return 0;
              var t2 = this.dottedRadius, r2 = this.fontStyle, i2 = this.label, n2 = this.labelPadding, a2 = this.leftPadding;
              e3.font = r2;
              var s2 = e3.measureText(i2);
              this._textMetrics = s2;
              var u2 = i2.length > 0 ? s2.width : 0;
              return this._width = (u2 > 2 ? a2 : -2) + 2 * t2 + 2 * n2 + Math.ceil(u2 / o.a());
            }
          }, {
            key: "fontStyle",
            get: function() {
              return this.fontSize * o.a() + 'pt/1 system, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica';
            }
          }, {
            key: "x0",
            get: function() {
              return (this.dottedRadius + this.leftPadding) * o.a();
            }
          }, {
            key: "y0",
            get: function() {
              return this.height / 2 * o.a();
            }
          }, {
            key: "progress",
            set: function(e3) {
              "number" == typeof e3 && (this._previousProgress = this._progress, this._progress = e3, this.redraw());
            },
            get: function() {
              return this._progress;
            }
          }, {
            key: "shouldShowError",
            set: function(e3) {
              this._shouldShowError = !!e3, this._redraw(this.progress);
            },
            get: function() {
              return this._shouldShowError;
            }
          }], [{
            key: "numberOfDots",
            get: function() {
              return 1 === o.a() ? 17 : 26;
            }
          }]), e2;
        }();
      }, function(e, t, r) {
        var i = r(30), n = r(0), a = r(6), o = i.a.extend({
          mimeType: n.a.observableProperty({
            dependencies: ["_mimeTypeFromXHR"],
            get: function(e2) {
              return this._mimeTypeFromXHR || e2 || null;
            }
          }),
          _mimeTypeFromXHR: n.a.observableProperty(),
          requiresMimeTypeForRawArrayBufferSrc: true,
          exposedMimeTypeKeyForErrorStrings: "mimeType",
          exposedSrcKeyForErrorStrings: "src",
          abortCurrentLoad: function() {
            this.__xhr && (this._detachXHR(), this._xhr.abort()), this._mimeTypeFromXHR = null, this.abortCurrentSecondaryLoad();
          },
          loadSrc: function(e2) {
            if ("string" == typeof e2) {
              this._mimeTypeFromXHR = null, this._attachXHR();
              var t2 = this._xhr;
              t2.open("GET", e2), t2.responseType = "arraybuffer", t2.send(null);
            } else if (e2 instanceof ArrayBuffer) {
              if (!this.mimeType && this.requiresMimeTypeForRawArrayBufferSrc) throw new Error("MIME Type must be assigned to `" + this.exposedMimeTypeKeyForErrorStrings + "` prior to assigning a raw ArrayBuffer to `" + this.exposedSrcKeyForErrorStrings + "`.");
              this.beginSecondaryLoad(e2, this.mimeType);
            }
          },
          get _xhr() {
            var e2 = this.__xhr;
            return e2 || (e2 = this.__xhr = new XMLHttpRequest()), e2;
          },
          _detachXHR: function() {
            var e2 = this._xhr;
            e2.removeEventListener("progress", this._xhrProgress), e2.removeEventListener("readystatechange", this._xhrReadyStateChanged);
          },
          _attachXHR: function() {
            var e2 = this._xhr;
            e2.addEventListener("progress", this._xhrProgress), e2.addEventListener("readystatechange", this._xhrReadyStateChanged);
          },
          _xhrReadyStateChanged: function() {
            if ("loading" === this.state) {
              if (this._xhr.readyState >= 2 && 200 !== this._xhr.status) {
                var e2 = new Error("Failed to download resource from URL assigned to '" + this.exposedSrcKeyForErrorStrings + "'.");
                return e2.errCode = a.a.FAILED_TO_DOWNLOAD_RESOURCE, this.loadDidFail(e2);
              }
              return 4 === this._xhr.readyState && 200 === this._xhr.status ? this._xhrLoadDidFinish() : void 0;
            }
          },
          _xhrProgress: function(e2) {
            if (e2 && e2.total) {
              var t2 = (+e2.loaded || 0) / e2.total;
              +t2 === t2 && (this.progress = Math.max(0, Math.min(1, t2)));
            }
          },
          _xhrLoadDidFinish: function() {
            this._mimeTypeFromXHR = this._xhr.getResponseHeader("Content-Type"), this.beginSecondaryLoad(this._xhr.response, this.mimeType);
          },
          beginSecondaryLoad: function(e2, t2) {
            this._defaultSecondaryLoadTimeout = setTimeout(this.loadDidSucceed.bind(this, e2), 0);
          },
          abortCurrentSecondaryLoad: function() {
            this._defaultSecondaryLoadTimeout && (clearTimeout(this._defaultSecondaryLoadTimeout), this._defaultSecondaryLoadTimeout = null);
          },
          init: function() {
            this._xhrReadyStateChanged = this._xhrReadyStateChanged.bind(this), this._xhrProgress = this._xhrProgress.bind(this), this._super();
          }
        });
        t.a = o;
      }, function(e, t, r) {
        var i = r(2);
        t.a = i.a.isEdge || i.a.isIE;
      }, function(e, t, r) {
        function i() {
          u.forEach(function(e2) {
            return e2();
          });
        }
        function n(e2) {
          u.push(e2);
        }
        function a() {
          return window.devicePixelRatio;
        }
        function o() {
          return Math.ceil(a());
        }
        t.b = n, t.a = o;
        var s = void 0, u = [];
        !function() {
          window.matchMedia && (s = window.matchMedia("only screen and (-webkit-min-device-pixel-ratio:1.3),only screen and (-o-min-device-pixel-ratio:13/10),only screen and (min-resolution:120dpi)"), s.addListener(i));
        }();
      }, function(e, t, r) {
        function i(e2, t2) {
          if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        }
        var n = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var r2 = 0; r2 < t2.length; r2++) {
              var i2 = t2[r2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, r2, i2) {
            return r2 && e2(t2.prototype, r2), i2 && e2(t2, i2), t2;
          };
        }(), a = function() {
          function e2(t2) {
            var r2 = this;
            i(this, e2), this._k = [], this._v = [], t2 && t2._k.forEach(function(e3) {
              r2.set(e3, t2.get(e3));
            });
          }
          return n(e2, [{
            key: "_indexOfKey",
            value: function(e3) {
              return this._k.indexOf(e3);
            }
          }, {
            key: "get",
            value: function(e3) {
              var t2 = this._indexOfKey(e3);
              return -1 === t2 ? void 0 : this._v[t2];
            }
          }, {
            key: "set",
            value: function(e3, t2) {
              var r2 = this._indexOfKey(e3);
              return -1 === r2 && (r2 = this._k.push(e3) - 1), this._v[r2] = t2, this;
            }
          }, {
            key: "delete",
            value: function(e3) {
              var t2 = this._indexOfKey(e3);
              return -1 !== t2 && (this._k.splice(t2, 1), this._v.splice(t2, 1), true);
            }
          }, {
            key: "clear",
            value: function() {
              this._k.length > 0 && (this._k.length = 0, this._v.length = 0);
            }
          }]), e2;
        }();
        t.a = a;
      }, function(e, t, r) {
        function i(e2) {
          if (null === e2) return "_null";
          if (void 0 === e2) return "_undefined";
          if (e2.hasOwnProperty("_LPKGUID")) return e2._LPKGUID;
          var t2 = void 0 === e2 ? "undefined" : n(e2);
          switch (t2) {
            case "number":
              Object.is(e2, -0) && (e2 = "-0");
            case "string":
            case "boolean":
              return t2 + e2;
            case "object":
            case "function":
              o++;
              var r2 = t2 + o;
              return a.value = r2, Object.defineProperty(e2, "_LPKGUID", a), r2;
            default:
              throw "unrecognized object type";
          }
        }
        t.a = i;
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
          return typeof e2;
        } : function(e2) {
          return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
        }, a = {
          value: "",
          enumerable: false,
          writable: false,
          configurable: false
        }, o = 0;
      }, function(e, t, r) {
        function i(e2) {
          return r(n(e2));
        }
        function n(e2) {
          var t2 = a[e2];
          if (!(t2 + 1)) throw new Error("Cannot find module '" + e2 + "'.");
          return t2;
        }
        var a = {
          "./en-us.lproj/strings.json": 22
        };
        i.keys = function() {
          return Object.keys(a);
        }, i.resolve = n, e.exports = i, i.id = 21;
      }, function(e, t) {
        e.exports = {
          "VideoEffects.Badge": "Badge",
          "VideoEffects.Badge.Title.Loop": "Loop",
          "VideoEffects.Badge.Title.Bounce": "Bounce",
          "VideoEffects.Badge.Title.LongExposure": "Long Exposure"
        };
      }, function(e, t, r) {
        var i = r(28), n = r(32), a = r(34), o = r(37), s = r(35), u = r(4), l = r(0), d = r(8), c = r(5), h = r(1);
        a.a.register(), o.a.register(), s.a.register();
        var p = d.a.extend({
          approach: "",
          autoplay: true,
          caption: "",
          _hasInitialized: false,
          _lastRecipe: null,
          recipe: l.a.observableProperty({
            get: function() {
              var e2 = u.a.getRecipeFromPlaybackStyle(this.playbackStyle);
              return this._setRecipe(e2), e2;
            },
            set: function(e2) {
              this._setRecipe(e2);
            }
          }),
          _setRecipe: function(e2) {
            e2 && e2 !== this._lastRecipe && (this._lastRecipe = e2, this.setUpRenderLayers());
          },
          requestMoreCompatibleRecipe: function() {
            this.recipe = this.recipe.requestMoreCompatibleRecipe();
          },
          duration: l.a.observableProperty({
            dependencies: ["recipe", "provider.videoDuration", "provider.photoTime"],
            get: function(e2) {
              var t2 = this.recipe, r2 = this.provider, i2 = r2.photoTime, n2 = r2.videoDuration;
              return t2 ? t2.calculateAnimationDuration(e2, n2, i2) : 0;
            }
          }),
          displayWidth: 0,
          displayHeight: 0,
          get backingWidth() {
            return Math.round(this.displayWidth * devicePixelRatio);
          },
          get backingHeight() {
            return Math.round(this.displayHeight * devicePixelRatio);
          },
          get renderLayerWidth() {
            return this.displayWidth;
          },
          get renderLayerHeight() {
            return this.displayHeight;
          },
          get videoWidth() {
            return this.videoDecoder.videoWidth;
          },
          get videoHeight() {
            return this.videoDecoder.videoHeight;
          },
          photoWidth: l.a.proxyProperty("photo.width"),
          photoHeight: l.a.proxyProperty("photo.height"),
          photo: l.a.proxyProperty("provider.photo"),
          video: l.a.proxyProperty("provider.video"),
          photoTime: l.a.proxyProperty("provider.photoTime"),
          frameTimes: l.a.proxyProperty("provider.frameTimes"),
          effectType: l.a.proxyProperty("provider.effectType"),
          preloadedEffectType: l.a.proxyProperty("provider.preloadedEffectType"),
          playbackStyle: l.a.proxyProperty("provider.playbackStyle"),
          currentTime: l.a.observableProperty({
            defaultValue: 0,
            dependencies: ["duration"],
            get: function(e2) {
              return Math.min(this.duration || 0, Math.max(0, e2 || 0));
            },
            didChange: function(e2) {
              this.prepareToRenderAtTime(e2);
            }
          }),
          canRenderCurrentTime: l.a.observableProperty({
            readOnly: true,
            dependencies: ["currentTime"],
            get: function() {
              return this.canRenderAtTime(this.currentTime);
            }
          }),
          _currentTimeRenderObserver: l.a.observer("currentTime", "canRenderCurrentTime", function(e2, t2) {
            t2 && (this.renderedTime = e2);
          }),
          renderedTime: l.a.observableProperty({
            defaultValue: 0,
            didChange: function(e2) {
              this.renderAtTime(e2), this.currentTime = e2;
            }
          }),
          areAllRenderLayersPrepared: l.a.observableProperty({
            defaultValue: false
          }),
          isFullyPreparedForPlayback: l.a.observableProperty({
            readOnly: true,
            dependencies: ["video", "areAllRenderLayersPrepared", "photoTime", "frameTimes", "playbackStyle"],
            get: function() {
              return Boolean(this.video && this.areAllRenderLayersPrepared && (this.photoTime || this.playbackStyle !== h.a.HINT) && Array.isArray(this.frameTimes));
            }
          }),
          cannotRenderDueToMissingPhotoTimeOrFrameTimes: l.a.observableProperty({
            readOnly: true,
            dependencies: ["video", "areAllRenderLayersPrepared", "photoTime", "frameTimes", "playbackStyle"],
            get: function() {
              return Boolean(this.video && this.areAllRenderLayersPrepared && (!this.photoTime && this.playbackStyle === h.a.HINT || !Array.isArray(this.frameTimes)));
            }
          }),
          renderLayers: l.a.property(function() {
            return [];
          }),
          videoDecoder: l.a.observableProperty(function() {
            return this._videoDecoderClass.create({
              owner: this
            });
          }),
          _videoDecoderClass: i.a.extend({
            owner: l.a.observableProperty(),
            provider: l.a.proxyProperty("owner.provider")
          }),
          provider: l.a.observableProperty(function() {
            return n.a.create();
          }),
          init: function() {
            this._super(), this.element.className = ((this.element.className || "") + " lpk-live-photo-renderer").trim(), this.element.style.position = "absolute", this.element.style.overflow = "hidden", this.element.style.textAlign = "left";
          },
          updateSize: function(e2, t2) {
            if (!arguments.length) return void (this.displayWidth && this.displayHeight && this.updateSize(this.displayWidth, this.displayHeight));
            this.displayWidth = e2 = Math.round(e2), this.displayHeight = t2 = Math.round(t2), this.element.style.width = e2 + "px", this.element.style.height = t2 + "px";
            for (var r2, i2 = 0; r2 = this.renderLayers[i2]; i2++) r2.updateSize(this.renderLayerWidth, this.renderLayerHeight);
          },
          _imageOrVideoDidEnterOrLeave: l.a.observer("videoDecoder.canProvideFrames", "photo", function() {
            this.prepareToRenderAtTime(this.currentTime);
          }),
          prepareToRenderAtTime: l.a.boundFunction(function(e2) {
            this.propertyChanged("canRenderCurrentTime");
            for (var t2, r2 = true, i2 = 0; t2 = this.renderLayers[i2]; i2++) r2 = t2.prepareToRenderAtTime(e2) && r2;
            this.areAllRenderLayersPrepared = r2;
          }),
          canRenderAtTime: function(e2) {
            if (0 === e2) return true;
            if (!this.duration && e2) return false;
            for (var t2, r2 = true, i2 = "", n2 = 0; t2 = this.renderLayers[n2]; n2++) t2.canRenderAtTime(e2) || (r2 = false, i2 += (i2 ? ", " : "Cannot render; waiting for ") + t2.layerName);
            return i2 && c.a.log(i2 + "."), r2;
          },
          renderAtTime: function(e2) {
            if (this.duration) for (var t2, r2 = 0; t2 = this.renderLayers[r2]; r2++) t2.renderAtTime(e2);
          },
          getNewRenderLayers: function() {
            return this.recipe.getRenderLayers(this);
          },
          setUpRenderLayers: function() {
            var e2 = this.renderLayers;
            e2 && this._cleanUpRenderLayers(e2), this.renderLayers = this.getNewRenderLayers(), this.updateSize(), this.currentTime = 0, this.prepareToRenderAtTime(0);
          },
          _cleanUpRenderLayers: function(e2) {
            for (var t2, r2 = 0; t2 = e2[r2]; r2++) t2.dispose(), t2.tearDownFromRender();
          },
          reduceMemoryFootprint: function() {
            for (var e2, t2 = 0; e2 = this.renderLayers[t2]; t2++) e2.reduceMemoryFootprint();
          },
          _clearRetainedFramesWhenNecessary: l.a.observer("provider.videoRotation", "provider.frameTimes", function() {
            this.reduceMemoryFootprint(), this.prepareToRenderAtTime(this.currentTime);
          })
        });
        t.a = p;
      }, function(e, t, r) {
        var i = r(23), n = i.a.extend({
          approach: "dom"
        });
        t.a = n;
      }, function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        var i = r(14), n = r(9), a = r(10), o = r(11);
        r.d(t, "augmentElementAsPlayer", function() {
          return o.a;
        }), r.d(t, "createPlayer", function() {
          return o.b;
        }), r.d(t, "Player", function() {
          return o.c;
        });
        var s = r(6);
        r.d(t, "Errors", function() {
          return s.a;
        });
        var u = r(15);
        r.d(t, "LivePhotoBadge", function() {
          return u.a;
        });
        var l = r(1);
        r.d(t, "PlaybackStyle", function() {
          return l.a;
        }), r.d(t, "Localization", function() {
          return d;
        }), r.d(t, "BUILD_NUMBER", function() {
          return c;
        }), r.d(t, "MASTERING_NUMBER", function() {
          return h;
        }), r.d(t, "VERSION", function() {
          return p;
        }), r.d(t, "LIVEPHOTOSKIT_LOADED", function() {
          return f;
        });
        var d = {
          get locale() {
            return a.a.locale;
          },
          set locale(e2) {
            a.a.locale = e2;
          }
        }, c = i.a.BUILD_NUMBER, h = i.a.MASTERING_NUMBER, p = i.a.VERSION, f = i.a.LIVEPHOTOSKIT_LOADED, v = "undefined" != typeof window && "undefined" != typeof document;
        if (v) {
          var y = window.document;
          setTimeout(function() {
            return y.dispatchEvent(r.i(n.a)());
          });
          if (y.styleSheets && document.head) {
            for (var m = null, g = null, b = 0; b < y.styleSheets.length; ++b) try {
              var _ = y.styleSheets[b];
              if (_.cssRules) for (var P = 0; P < _.cssRules.length; ++P) {
                var k = _.cssRules[P];
                if (-1 !== k.cssText.indexOf(".lpk-live-photo-player")) {
                  m = k;
                  break;
                }
              }
              if (m) {
                g = _;
                break;
              }
            } catch (e2) {
              if ("SecurityError" !== e2.name && "Access is denied." !== e2.message.substring(0, 17) && "Member not found." !== e2.message.substring(0, 17)) throw e2;
            }
            if (!g) {
              var T = document.createElement("style");
              T.type = "text/css", document.head.appendChild(T), g = T.sheet;
            }
            var x = "user-select: none;-khtml-user-select: none; -moz-user-select: none;-ms-user-select: none;-webkit-touch-callout: none; -webkit-user-select: none;";
            g.addRule ? g.addRule(".lpk-live-photo-player", x) : g.insertRule && g.insertRule(".lpk-live-photo-player {" + x + "}", 0);
          }
        }
        if (v && document.querySelectorAll instanceof Function) {
          var S = function() {
            F = true, Array.prototype.forEach.call(document.querySelectorAll("[data-live-photo]"), function(e2) {
              return r.i(o.a)(e2);
            });
          }, w = function() {
            !F && O && C && S();
          }, O = /interactive|complete|loaded/.test(document.readyState), C = !!window.LivePhotosKit, F = false;
          O || document.addEventListener("DOMContentLoaded", function() {
            O = true, w();
          }), C || document.addEventListener("livephotoskitloaded", function() {
            C = true, w();
          }), w();
        }
      }, function(e, t, r) {
        var i = r(8), n = r(18), a = r(15);
        r.d(t, "a", function() {
          return o;
        });
        var o = i.a.extend({
          badgeView: null,
          init: function() {
            var e2 = this;
            this._super(), this._createBadgeView(), n.b(function() {
              return e2.badgeView.redraw();
            });
          },
          _createBadgeView: function() {
            this.badgeView = new a.a(), this.element.appendChild(this.badgeView.element);
            var e2 = this.badgeView.element.style;
            e2.top = "10px", e2.left = "10px", e2.position = "absolute", e2.zIndex = 4;
          },
          updateToRendererLayout: function(e2, t2, r2, i2) {
            var n2 = this.badgeView, a2 = n2.element.style;
            a2.left = e2 + 10 + "px", a2.top = t2 + 10 + "px", a2.right = "";
          },
          redraw: function() {
            this.badgeView.redraw();
          }
        });
      }, function(e, t, r) {
        function i(e2) {
          if (Array.isArray(e2)) {
            for (var t2 = 0, r2 = Array(e2.length); t2 < e2.length; t2++) r2[t2] = e2[t2];
            return r2;
          }
          return Array.from(e2);
        }
        function n(e2) {
          if (!e2) return false;
          try {
            e2.appendChild(f), e2.removeChild(f);
          } catch (e3) {
            return false;
          }
          return true;
        }
        var a = r(8), o = r(24), s = r(26), u = r(54), l = r(0), d = r(9), c = r(53), h = r(1), p = a.a.extend({
          staticMembers: {
            activeInstance: l.a.observableProperty(null)
          },
          renderer: l.a.observableProperty(function() {
            return o.a.create();
          }),
          showsNativeControls: l.a.observableProperty(true),
          isPlaying: l.a.observableProperty(false),
          wantsToPlay: l.a.observableProperty({
            defaultValue: false,
            didChange: function(e2) {
              e2 && (this.constructor.activeInstance = this);
            }
          }),
          canPlay: l.a.observableProperty({
            readOnly: true,
            dependencies: ["isPlaying", "renderer.isFullyPreparedForPlayback"],
            get: function() {
              return this.isPlaying || this.renderer.isFullyPreparedForPlayback;
            },
            didChange: function(e2) {
              e2 && (this._hasHadCanPlay = true, this.dispatchEvent(r.i(d.b)()), this.wantsToPlay && this.play());
            }
          }),
          _generateErrorIfPlayedWithoutNecessaryMetadata: l.a.observer("renderer.cannotRenderDueToMissingPhotoTimeOrFrameTimes", "wantsToPlay", function(e2) {
            e2 && this.wantsToPlay && (this._cannotRenderDueToMissingPhotoTimeOrFrameTimesError = new Error("The `photoTime` and/or `frameTimes` values are missing. Provide them directly (or via `metadataVideoSrc`) if they cannot be parsed from the video.")), e2 || (this._cannotRenderDueToMissingPhotoTimeOrFrameTimesError = null);
          }),
          _cannotRenderDueToMissingPhotoTimeOrFrameTimesError: l.a.observableProperty(),
          _playerErrors: l.a.observableProperty({
            readOnly: true,
            dependencies: ["_cannotRenderDueToMissingPhotoTimeOrFrameTimesError"],
            get: function() {
              var e2 = this._cannotRenderDueToMissingPhotoTimeOrFrameTimesError;
              return e2 ? [e2] : null;
            }
          }),
          _captionChanged: l.a.observer("caption", function(e2) {
            var t2 = "";
            e2 && (t2 = ": " + e2), this.element.setAttribute("aria-label", "Live Photo" + t2);
          }),
          _effectTypeChanged: l.a.observer("effectType", function(e2) {
            this.badgeView && e2 && this.updateBadgeText();
          }),
          errors: l.a.observableProperty({
            readOnly: true,
            dependencies: ["provider.errors", "_playerErrors"],
            get: function() {
              var e2 = this.provider.errors, t2 = this._playerErrors, r2 = [];
              return e2 && e2.length && r2.push.apply(r2, i(e2)), t2 && t2.length && r2.push.apply(r2, i(t2)), r2;
            }
          }),
          lastError: l.a.observableProperty({
            dependencies: ["provider.lastError"],
            get: function(e2) {
              return e2 || this.provider.lastError || null;
            },
            didChange: function(e2) {
              e2 && (this.throwError(e2), this.stop());
            }
          }),
          playbackRate: l.a.proxyProperty("renderer.videoDecoder.playbackRate"),
          currentTime: l.a.proxyProperty("renderer.currentTime"),
          renderedTime: l.a.proxyProperty("renderer.renderedTime"),
          duration: l.a.proxyProperty("renderer.duration"),
          videoWidth: l.a.proxyProperty("renderer.videoWidth"),
          videoHeight: l.a.proxyProperty("renderer.videoHeight"),
          photoWidth: l.a.proxyProperty("renderer.photoWidth"),
          photoHeight: l.a.proxyProperty("renderer.photoHeight"),
          recipe: l.a.proxyProperty("renderer.recipe"),
          requiresInterpolation: l.a.proxyProperty("renderer.recipe.requiresInterpolation"),
          effectType: l.a.proxyProperty("provider.effectType"),
          preloadedEffectType: l.a.proxyProperty("renderer.preloadedEffectType"),
          playbackStyle: l.a.proxyProperty("renderer.playbackStyle"),
          provider: l.a.proxyProperty("renderer.provider"),
          proactivelyLoadsVideo: l.a.proxyProperty("provider.proactivelyLoadsVideo"),
          metadataVideoSrc: l.a.proxyProperty("provider.metadataVideoSrc"),
          photoMimeType: l.a.proxyProperty("provider.photoMimeType"),
          photoSrc: l.a.proxyProperty("provider.photoSrc"),
          photo: l.a.proxyProperty("provider.photo"),
          videoMimeType: l.a.proxyProperty("provider.videoMimeType"),
          videoSrc: l.a.proxyProperty("provider.videoSrc"),
          video: l.a.proxyProperty("provider.video"),
          photoTime: l.a.proxyProperty("provider.photoTime"),
          frameTimes: l.a.proxyProperty("provider.frameTimes"),
          videoRotation: l.a.proxyProperty("provider.videoRotation"),
          loadProgress: l.a.proxyProperty("provider.progress"),
          autoplay: l.a.proxyProperty("renderer.autoplay"),
          caption: l.a.proxyProperty("renderer.caption"),
          _isZeroSizeWarningLogged: l.a.observableProperty(false),
          _renderWhenPossible: l.a.observer("renderer.video", "renderer.photo", function() {
            if (this._cannotRenderDueToMissingPhotoTimeOrFrameTimesError = null, this.updateSize(true), !this._isZeroSizeWarningLogged) {
              var e2 = this.element.getBoundingClientRect();
              0 !== e2.width && 0 !== e2.height || (console.warn("The LivePhotosKit Player located at position (" + e2.left + ", " + e2.top + ") in the viewport has either a zero width or zero height (or both) and will not render. To fix this, ensure that the Player has a style that will yield a non-zero width and height."), this._isZeroSizeWarningLogged = true);
            }
          }),
          attachBadgeView: function(e2) {
            var t2 = this;
            this.badgeView = e2, this.updateBadgeText(), e2.configurePlayAction(function() {
              return t2.play();
            }), e2.configureStopAction(function() {
              return t2.beginFinishingPlaybackEarly();
            });
          },
          updateBadgeText: function() {
            this.badgeView.updateBadgeText(this.effectType);
          },
          nativeControls: l.a.observableProperty({
            readOnly: true,
            dependencies: ["showsNativeControls"],
            get: function() {
              var e2 = this;
              return this.showsNativeControls ? this._nativeControls_cachedValue || (this._nativeControls_cachedValue = s.a.extend({
                owner: l.a.observableProperty(this),
                _slurpProgress: l.a.observer("owner.provider.progress", function(e3) {
                  this.badgeView && (this.badgeView.progress = e3);
                }),
                _slurpError: l.a.observer("owner.errors", function(e3) {
                  this.badgeView && (this.badgeView.shouldShowError = !!e3 && e3.length > 0);
                }),
                init: function() {
                  this._super.apply(this, arguments), e2.attachBadgeView(this.badgeView);
                }
              }).create()) : null;
            },
            didChange: function(e2) {
              this._nativeControls_previousValue && this._nativeControls_previousValue.detach(), this._nativeControls_previousValue = e2, e2 && e2.attachInto(this);
            }
          }),
          init: function(e2, t2) {
            var i2 = this;
            if (e2 && !n(e2)) throw "Any pre-existing element provided for use as a LivePhotosKit.Player must be able to append child DOM nodes.";
            e2 && e2.childNodes.length && (e2.innerHTML = "");
            for (var a2 in t2) Object.prototype.hasOwnProperty.call(t2, a2) && (this[a2] = t2[a2]);
            this._super(e2);
            switch (this.element.className.indexOf("lpk-live-photo-player") < 0 && (this.element.className = this.element.className + " lpk-live-photo-player"), this.element.setAttribute("role", "image"), r.i(c.a)(this.element, "position") || this.element.style.position) {
              case "absolute":
              case "fixed":
              case "relative":
                break;
              default:
                this.element.style.position = "relative";
            }
            switch (r.i(c.a)(this.element, "display") || this.element.style.display) {
              case "block":
              case "inline-block":
              case "table":
              case "table-caption":
              case "table-column-group":
              case "table-header-group":
              case "table-footer-group":
              case "table-row-group":
              case "table-cell":
              case "table-column":
              case "table-row":
                break;
              default:
                this.element.style.display = "inline-block";
            }
            this.renderer.attachInto(this), this.renderer.eventDispatchingElement = this.element, window.addEventListener("resize", this.updateSize), "ontouchstart" in document.documentElement && (this.addEventListener("touchstart", function() {
              return i2.play();
            }, false), this.addEventListener("touchend", function() {
              return i2.beginFinishingPlaybackEarly();
            }, false));
          },
          play: function() {
            if (!this.isPlaying) {
              var e2 = this.provider;
              e2.video || (e2.needsLoadedVideoForPlayback = true), this.wantsToPlay = true, this.canPlay && (this.isPlaying = true, this._lastFrameNow = Date.now(), this._nextFrame());
            }
            return this.isPlaying;
          },
          pause: function() {
            this.isPlaying = false, this.wantsToPlay = false, this._cancelNextFrame();
          },
          stop: function() {
            this.pause(), this.currentTime = 0, this.renderer.duration = NaN;
          },
          toggle: function() {
            this.wantsToPlay ? this.pause() : this.play();
          },
          beginFinishingPlaybackEarly: function() {
            this.recipe.beginFinishingPlaybackEarly(this);
          },
          _stopWhenAnotherPlayerStarts: l.a.observer("_constructor.activeInstance", function(e2) {
            e2 && e2 !== this && (this.stop(), this.renderer.reduceMemoryFootprint());
          }),
          _constructor: l.a.observableProperty(function() {
            return p;
          }),
          _stopPlaybackWhenItemsLoadOrUnload: l.a.observer("video", "photo", function() {
            !this.isPlaying || this.playbackStyle === h.a.LOOP && this.autoplay || this.stop();
          }),
          addEventListener: function(e2, t2, r2) {
            var i2 = this.element;
            i2.addEventListener.call(i2, e2, t2, r2);
          },
          removeEventListener: function(e2, t2, r2) {
            var i2 = this.element;
            i2.removeEventListener.call(i2, e2, t2, r2);
          },
          _nextFrame: function() {
            var e2 = Date.now(), t2 = (e2 - this._lastFrameNow) * this.playbackRate;
            this._lastFrameNow = e2, this.currentTime === this.renderedTime && (this.currentTime += t2 / 1e3), this.recipe && this.recipe.continuePlayback(this);
          },
          _cancelNextFrame: function() {
            cancelAnimationFrame(this._rafID);
          },
          updateSize: l.a.boundFunction(function(e2, t2) {
            if (this.photoWidth && this.photoHeight) {
              var i2 = true === e2 ? void 0 : e2, n2 = true === e2 ? e2 : void 0;
              if (isNaN(i2) || isNaN(t2) ? (i2 = this.element.offsetWidth, t2 = this.element.offsetHeight) : (i2 = Math.round(i2), t2 = Math.round(t2), this.element.style.width = i2 + "px", this.element.style.height = t2 + "px"), i2 && t2) {
                if (!(this._lastUpdateChangeToken !== (this._lastUpdateChangeToken = i2 + ":" + t2)) && !n2) return false;
                var a2 = r.i(u.a)(this.photoWidth, this.photoHeight, i2, t2), o2 = Math.ceil(a2.height), s2 = Math.ceil(a2.width), l2 = Math.floor(i2 / 2 - s2 / 2), d2 = Math.round(t2 / 2 - o2 / 2), c2 = this.renderer;
                c2.element.style.top = d2 + "px", c2.element.style.left = l2 + "px", c2.updateSize(s2, o2), this.displayWidth = i2, this.displayHeight = t2, this.nativeControls && this.nativeControls.updateToRendererLayout(l2, d2, s2, o2);
              }
            }
          }),
          _dispatchPhotoLoadEventOnNewPhoto: l.a.observer("photo", function(e2) {
            e2 && this.dispatchEvent(r.i(d.c)());
          }),
          _dispatchVideoLoadEventOnNewVideo: l.a.observer("video", function(e2) {
            e2 && this.dispatchEvent(r.i(d.d)());
          }),
          throwError: function(e2) {
            this.dispatchEvent(r.i(d.e)({
              error: e2,
              errorCode: e2.errCode
            }));
          }
        }), f = document.createElement("div");
        t.a = p;
      }, function(e, t, r) {
        function i() {
          f = false;
        }
        function n() {
        }
        function a(e2, t2) {
          return -(e2.importance - t2.importance) || e2.number - t2.number;
        }
        function o(e2, t2) {
          for (var r2 = 0, i2 = e2.length, n2 = 0; n2 < i2 - r2; n2++) if (e2[n2] === t2 && (r2++, n2--), r2) {
            var a2 = n2 + 1;
            e2[a2] = e2[a2 + r2];
          }
          return e2.length -= r2, e2;
        }
        var s = r(52), u = r(29), l = r(0), d = r(17), c = r(2), h = -1 !== location.href.indexOf("_lpk_play_to_decode=true") || -1 === location.href.indexOf("_lpk_play_to_decode=false") && !c.a.isSafari && !c.a.isIOS, p = -1 !== location.href.indexOf("_lpk_persistent_frames=true") || (location.href.indexOf("_lpk_persistent_frames=false"), false), f = true, v = l.a.Object.extend({
          id: l.a.property(function() {
            return r.i(s.a)();
          }),
          provider: l.a.observableProperty(),
          video: l.a.proxyProperty("provider.video"),
          duration: l.a.proxyProperty("provider.videoDuration"),
          videoRotation: l.a.proxyProperty("provider.videoRotation"),
          frameTimes: l.a.proxyProperty("provider.frameTimes"),
          requiresInterpolation: l.a.proxyProperty("renderer.recipe.requiresInterpolation"),
          get frameCount() {
            var e2 = this.frameTimes;
            return e2 ? e2.length : 0;
          },
          shouldPrepareToSeek: false,
          canProvideFrames: l.a.observableProperty({
            readOnly: true,
            dependencies: ["video"],
            get: function() {
              return !!this.video;
            }
          }),
          videoWidth: l.a.observableProperty({
            readOnly: true,
            dependencies: ["video", "videoRotation"],
            get: function() {
              var e2 = this.video;
              if (e2) return this.videoRotation % 180 == 0 ? e2.videoWidth : e2.videoHeight;
            }
          }),
          videoHeight: l.a.observableProperty({
            readOnly: true,
            dependencies: ["video", "videoRotation"],
            get: function() {
              var e2 = this.video;
              if (e2) return this.videoRotation % 180 == 0 ? e2.videoHeight : e2.videoWidth;
            }
          }),
          playbackRate: l.a.observableProperty(1),
          _sendPlaybackRateToVideo: l.a.observer("playbackRate", "video", function(e2, t2) {
            t2 && (t2.playbackRate = e2);
          }),
          _pendingFrames: l.a.property(function() {
            return [];
          }),
          init: function() {
            this._largeCanvas = document.createElement("canvas"), this._largeContext = this._largeCanvas.getContext("2d"), this._super.apply(this, arguments);
          },
          _handleVideoChange: l.a.observer("video", function() {
            var e2 = this.video, t2 = this._lastVideo;
            if (this._lastVideo = e2, e2 !== t2 && (t2 && this.cleanUpOldVideo(t2), e2 && this.setUpNewVideo(e2), e2 && p)) for (var r2 = d.a ? 1 : 0; this.frameTimes && r2 < this.frameTimes.length; r2++) this.getFrame(r2).retain();
          }),
          setUpNewVideo: function(e2) {
            e2.addEventListener("seeked", this._seeked), e2.muted = true;
          },
          cleanUpOldVideo: function(e2) {
            e2.removeEventListener("seeked", this._seeked), e2.playbackRate = 1, e2.muted = false, e2.pause(), this._stopSeekingEntirely();
          },
          fractionalIndexForTime: function(e2) {
            if (e2 = Math.min(this.duration, Math.max(0, e2)), isNaN(e2)) return e2;
            var t2 = this.frameTimes, r2 = t2.length, i2 = void 0;
            for (i2 = 0; i2 < r2 && t2[i2] < e2; i2++) ;
            i2 && i2--;
            var n2 = t2[i2], a2 = t2[i2 + 1];
            return a2 ? i2 + Math.min(1, (e2 - n2) / (a2 - n2)) : i2;
          },
          timeForFractionalIndex: function(e2) {
            if (e2 <= 0) return 0;
            if (e2 >= this.frameTimes.length) return this.duration;
            var t2 = 0 | e2, r2 = Math.ceil(e2);
            if (t2 === r2) return this.frameTimes[t2];
            var i2 = this.frameTimes[t2], n2 = r2 < this.frameTimes.length ? this.frameTimes[r2] : this.duration;
            return n2 ? i2 + (e2 - t2) * (n2 - i2) : i2;
          },
          getFrame: function(e2, t2) {
            if (!this.frameTimes) throw "Attempted to get frame before ready.";
            if (isNaN(this.frameTimes[e2])) throw "Frame number " + e2 + " is is not a frame in the video.";
            var r2 = u.a.getCached(this, e2);
            return isNaN(t2) || (r2.importance = Math.max(r2.importance, t2)), r2.readyState || (this._pendingFrames.push(r2), this._pendingFrames.sort(a), r2.didPend(), this._isSeeking || this._scheduleArtificialSeek()), r2;
          },
          peekFrame: function(e2) {
            var t2 = u.a.peekCached(this, e2);
            return t2 && 2 === t2.readyState && !t2.lacksOwnPixelData ? t2 : null;
          },
          getNearestDecodedFrame: function(e2) {
            for (var t2 = Math.max(e2, this.frameTimes.length - 1 - e2), r2 = -1; ++r2 <= t2; ) {
              var i2 = this.peekFrame(e2 + r2) || this.peekFrame(e2 - r2);
              if (i2) return i2;
            }
            return null;
          },
          _scheduleArtificialSeek: function() {
            this._artificialSeekTimeout || (this._artificialSeekTimeout = setTimeout(this._seeked), this._artificialSeekRAFId = requestAnimationFrame(this._seeked));
          },
          _unscheduleArtificialSeek: function() {
            this._artificialSeekTimeout && (clearTimeout(this._artificialSeekTimeout), this._artificialSeekTimeout = null, cancelAnimationFrame(this._artificialSeekRAFId), this._artificialSeekRAFId = null);
          },
          _stopSeekingEntirely: function() {
            this._unscheduleArtificialSeek(), this._isPlaying = false, this._isSeeking = false, this._expectedNextSeenFrameNumber = NaN, this.video && this.video.pause();
          },
          _seeked: l.a.boundFunction(function(e2) {
            var t2 = this._pendingFrames;
            if ((0 !== t2.length || this.requiresInterpolation) && !(e2 instanceof Event && e2.target !== this.video) && (e2 instanceof Event || this.video)) {
              this._unscheduleArtificialSeek(), this._isSeeking = false;
              var r2 = this.fractionalIndexForTime(this.video.currentTime);
              r2 |= 0;
              for (var a2, o2 = NaN, s2 = 0; a2 = t2[s2]; s2++) if (a2.number === r2) {
                o2 = r2, a2.didDecode(), this._removePendingFrame(a2);
                break;
              }
              var u2 = this._expectedNextSeenFrameNumber;
              if (this._expectedNextSeenFrameNumber = NaN, u2 < o2) for (var l2, d2 = 0; l2 = t2[d2]; d2++) l2.number >= u2 && l2.number < o2 && (l2.didGetSkipped(), this._removePendingFrame(l2), d2--);
              var c2 = t2[0];
              if (!c2) return this._isPlaying && this.requiresInterpolation && (this._isPlaying = false, this.video.pause()), void (this._expectedNextSeenFrameNumber = NaN);
              var p2 = c2.number > r2 && c2.number <= r2 + 2 && f;
              if (h || (p2 = false), p2) {
                if (!this._isPlaying) {
                  this._isPlaying = true;
                  try {
                    var v2 = this.video.play();
                    v2 && v2.then instanceof Function && v2.then(n, i);
                  } catch (e3) {
                    f = false;
                  }
                }
                this._expectedNextSeenFrameNumber = c2.number, this._scheduleArtificialSeek();
              } else this._isPlaying && (this._isPlaying = false, this.video.pause()), this._expectedNextSeenFrameNumber = NaN, this.video.currentTime = c2.time + 1e-4, this._isSeeking = true;
            }
          }),
          _frameWillDispose: function(e2) {
            this._removePendingFrame(e2);
          },
          _removePendingFrame: function(e2) {
            o(this._pendingFrames, e2), this._pendingFrames.length || this._unscheduleArtificialSeek();
          }
        });
        t.a = v;
      }, function(e, t, r) {
        function i(e2) {
          e2.container = document.createElement("div"), e2.container.frame = e2, e2.container.innerHTML = '<div style="position:absolute; left:0; right:0; top:0; bottom:0; text-align:center; line-height:30px; color:white; text-shadow: black 0px 0px 4px,black 0px 0px 4px,black 0px 0px 4px,black 0px 0px 4px; font-family:HelveticaNeue-Light;"></div>', e2.textBox = e2.container.lastChild, e2.container.insertBefore(e2.image, e2.textBox), e2.image.style.position = "absolute", e2.container.style.cssText = "position:relative; display:inline-block; border: 1px solid black;";
          var t2 = e2._debug_aspect || (e2._debug_aspect = e2.videoDecoder && (e2.videoDecoder.videoWidth > e2.videoDecoder.videoHeight ? "landscape" : "portrait"));
          e2.container.style.width = e2.image.style.width = "landscape" === t2 ? "40px" : "30px", e2.container.style.height = e2.image.style.height = "landscape" === t2 ? "30px" : "40px", document.body.appendChild(e2.container);
        }
        var n = r(12), a = r(48), o = r(5), s = r(0), u = r(46), l = r(2);
        r.d(t, "a", function() {
          return d;
        });
        var d = s.a.Object.extend(u.a, a.a, {
          staticMembers: {
            getPoolingCacheKey: function(e2, t2) {
              return "f" + t2 + "_in_" + e2.id;
            }
          },
          container: null,
          image: null,
          _context: null,
          number: -1,
          time: -1,
          importance: 0,
          videoDecoder: null,
          readyState: 0,
          _poolingCacheKey: null,
          _debugShowInDOM: n.a,
          lacksOwnPixelData: false,
          _postDispose: function() {
            this.image.width = this.image.height = 0;
          },
          get backingFrame() {
            return this.lacksOwnPixelData ? this.videoDecoder.getNearestDecodedFrame(this.number) || this : this;
          },
          init: function() {
            this._postDispose = this._postDispose.bind(this);
            var e2 = this.image = document.createElement("canvas");
            this._context = this.image.getContext("2d"), this._super(), this._debugShowInDOM ? i(this) : h && (h.appendChild(e2), e2.style.cssText = "position: absolute; top: 0px; width:1px; height: 1px; display: inline-block;", e2.style.left = c++ + "px");
          },
          initFromPool: function(e2, t2) {
            clearTimeout(this._postDisposalTimeout), this.videoDecoder = e2, this.number = t2, this.time = e2.frameTimes[t2], this._debugShowInDOM && (this.textBox.innerHTML = this.number);
          },
          dispose: function() {
            this.resetReadiness(), this.videoDecoder._frameWillDispose(this), this.number = this.time = -1, this.importance = 0, this.videoDecoder = null, this.readyState = 0, this.lacksOwnPixelData = false, this._postDisposalTimeout = setTimeout(this._postDispose, 3e3), this.constructor._disposeInstance(this), this._debugShowInDOM && (this.textBox.innerHTML = "x", this.textBox.style.color = "#FF0000", this._context.clearRect(0, 0, this.image.width, this.image.height));
          },
          didPend: function() {
            this.readyState = 1, this._debugShowInDOM && (this.textBox.style.color = "#FF8800");
          },
          didDecode: function() {
            this.obtainPixelData(), this.readyState = 2, this.resolveReadiness(this), this._debugShowInDOM && (this.textBox.style.color = "#00FF00");
          },
          obtainPixelData: function() {
            var e2 = this.image, t2 = this._context, r2 = this.videoDecoder, i2 = r2.videoRotation, n2 = r2.videoWidth, a2 = r2.videoHeight, o2 = i2 % 180 == 0 ? n2 : a2, s2 = i2 % 180 == 0 ? a2 : n2;
            e2.width === n2 && e2.height === a2 || (e2.width = n2, e2.height = a2), l.a.isFirefox && t2.getImageData(0, 0, 1, 1);
            for (var u2 = 0; u2 < i2; u2 += 90) t2.translate(u2 % 180 ? a2 : n2, 0), t2.rotate(Math.PI / 2);
            t2.drawImage(r2.video, 0, 0, o2, s2), t2.setTransform(1, 0, 0, 1, 0, 0);
          },
          didGetSkipped: function() {
            o.a.log("    Skipped decoding frame " + this.number + ". Using nearest frame instead."), this.lacksOwnPixelData = true, this.readyState = 2, this.resolveReadiness(this), this._debugShowInDOM && (this._context.fillStyle = "red", this._context.fillRect(0, 0, this.image.width, this.image.height), this.textBox.style.color = "#00FF00");
          }
        }), c = 0, h = function() {
          if (!l.a.isIE && !l.a.isEdge) return null;
          var e2 = document.createElement("div");
          return e2.style.cssText = "top: 0px; left: 0px; width: 50px; height: 1px; overflow: hidden; position: absolute; z-index: 100000; opacity: 0.001; pointer-events: none;", document.body ? document.body.appendChild(e2) : setTimeout(function() {
            return document.body.appendChild(e2);
          }, 0), e2;
        }();
      }, function(e, t, r) {
        var i = r(0), n = i.a.Object.extend({
          state: i.a.observableProperty("unloaded"),
          validateResult: function(e2) {
            return !!e2;
          },
          loadSrc: function(e2) {
          },
          abortCurrentLoad: function() {
          },
          isSrcLoadAllowed: i.a.observableProperty(true),
          _loadSrcOnceAllowed: i.a.observer("isSrcLoadAllowed", function(e2) {
            if (e2) {
              if ("unloaded" === this.state) {
                var t2 = this.src;
                t2 && (this.state = "loading", this.loadSrc(t2));
              }
            }
          }),
          src: i.a.observableProperty({
            didChange: function(e2) {
              this._isWritingSrcDueToWritingOfResult || (this._isWritingResultDueToWritingOfSrc = true, this.result = null, this._isWritingResultDueToWritingOfSrc = false, this.abortCurrentLoad(), e2 && this.isSrcLoadAllowed ? (this.state = "loading", this.loadSrc(e2)) : this.state = "unloaded");
            }
          }),
          result: i.a.observableProperty({
            decideRequiresUpdate: function() {
              return true;
            },
            didChange: function(e2) {
              if (!this._isWritingResultDueToWritingOfSrc) {
                var t2 = this.validateResult(e2) ? "loaded" : e2 || this._isWritingResultDueToError ? "errored" : "unloaded";
                this._isWritingResultDueToLoadOfSrc || this._isWritingResultDueToError || (this._isWritingSrcDueToWritingOfResult = true, this.src = null, this._isWritingSrcDueToWritingOfResult = false, this.abortCurrentLoad(), this.state = "unloaded"), this.state = t2;
              }
            }
          }),
          error: i.a.observableProperty(null),
          _clearErrorOnceNoLongerErrored: i.a.observer("state", function(e2) {
            "errored" !== e2 && (this.error = null);
          }),
          progress: i.a.observableProperty({
            defaultValue: 0,
            dependencies: ["state"],
            get: function(e2) {
              return "loading" === this.state ? Math.min(1, Math.max(0, +e2 || 0)) : "loaded" === this.state ? 1 : 0;
            }
          }),
          _clearProgressOnceUnloaded: i.a.observer("state", function(e2) {
            "unloaded" === e2 && (this.progress = 0);
          }),
          loadDidFail: function(e2) {
            "loading" === this.state && (this._isWritingResultDueToError = true, this.result = null, this._isWritingResultDueToError = false, this.error = e2);
          },
          loadDidSucceed: function(e2) {
            "loading" === this.state && (this._isWritingResultDueToLoadOfSrc = true, this.result = e2, this._isWritingResultDueToLoadOfSrc = false, this.error = null);
          }
        });
        t.a = n;
      }, function(e, t, r) {
        function i(e2, t2, r2) {
          var i2 = e2.getContext("2d"), n2 = 7 === r2 || 8 === r2 ? 270 : 3 === r2 || 4 === r2 ? 180 : 5 === r2 || 6 === r2 ? 90 : 0, a2 = t2.naturalWidth, o2 = t2.naturalHeight, s2 = n2 % 180 == 0 ? a2 : o2, u2 = n2 % 180 == 0 ? o2 : a2, l2 = 2 === r2 || 4 === r2 ? -1 : 1, d2 = 5 === r2 || 7 === r2 ? -1 : 1;
          e2.width === s2 && e2.height === u2 || (e2.width = s2, e2.height = u2);
          for (var c = 0; c < n2; c += 90) i2.translate(c % 180 ? u2 : s2, 0), i2.rotate(Math.PI / 2);
          i2.scale(l2, d2), i2.translate((l2 - 1) / 2 * a2, (d2 - 1) / 2 * o2), i2.drawImage(t2, 0, 0), i2.setTransform(1, 0, 0, 1, 0, 0);
        }
        var n = r(16), a = r(51), o = r(6), s = r(3), u = [], l = {}, d = n.a.extend({
          mimeType: "image/jpeg",
          beginSecondaryLoad: function(e2, t2) {
            var i2 = r.i(a.a)(e2);
            this._exifOrientationInLastLoadedBuffer = i2.orientation || NaN, 3 === i2.photosRenderEffect && (this.effectType = s.a.EXPOSURE), u[0] = e2, l.type = t2, this._internalImage.src = this._internalImageSrc = URL.createObjectURL(new Blob(u, l)), (window.photoBuffers || (window.photoBuffers = [])).push(e2);
          },
          abortCurrentSecondaryLoad: function() {
            this.__internalImage && this._internalImage.removeAttribute("src"), this._internalImageSrc && (URL.revokeObjectURL(this._internalImageSrc), this._internalImageSrc = null), this._exifOrientationInLastLoadedBuffer = null, this.effectType = null;
          },
          get _internalImage() {
            var e2 = this.__internalImage;
            return e2 || (e2 = this.__internalImage = new Image(), e2.addEventListener("load", this._internalImageLoadDidSucceed.bind(this)), e2.addEventListener("error", (function(e3) {
              this.loadDidFail(e3);
            }).bind(this))), e2;
          },
          get _internalCanvas() {
            return this.__internalCanvas || (this.__internalCanvas = document.createElement("canvas"));
          },
          loadDidFail: function(e2) {
            if (e2) return e2.errCode = o.a.PHOTO_FAILED_TO_LOAD, this._super(e2);
          },
          _internalImageLoadDidSucceed: function() {
            var e2 = this._internalImage;
            1 !== this._exifOrientationInLastLoadedBuffer && (i(this._internalCanvas, this._internalImage, this._exifOrientationInLastLoadedBuffer), e2 = this._internalCanvas), this.loadDidSucceed(e2);
          }
        });
        t.a = d;
      }, function(e, t, r) {
        var i = r(0), n = r(33), a = r(31), o = r(3), s = r(1), u = i.a.Object.extend({
          videoSrc: i.a.proxyProperty("_videoProvider.src"),
          videoMimeType: i.a.proxyProperty("_videoProvider.mimeType"),
          video: i.a.proxyProperty("_videoProvider.result"),
          effectType: i.a.observableProperty({
            dependencies: ["_photoProvider.effectType", "_videoProvider.effectType", "preloadedEffectType"],
            get: function() {
              return this._photoProvider.effectType || this._videoProvider.effectType || this.preloadedEffectType || o.a.default;
            },
            didChange: function(e2) {
              this.setPlaybackStyle(e2);
            }
          }),
          preloadedEffectType: i.a.observableProperty({
            get: function(e2) {
              return e2;
            },
            set: function(e2) {
              return this._photoProvider.effectType = null, this._videoProvider.effectType = null, e2;
            }
          }),
          setPlaybackStyle: function(e2) {
            this.effectType = e2, this.playbackStyle = o.a.toPlaybackStyle(e2);
          },
          photoSrc: i.a.proxyProperty("_photoProvider.src"),
          photoMimeType: i.a.proxyProperty("_photoProvider.mimeType"),
          photo: i.a.proxyProperty("_photoProvider.result"),
          playbackStyle: i.a.observableProperty(s.a.default),
          metadataVideoSrc: i.a.proxyProperty("_metadataVideoProvider.src"),
          progress: i.a.observableProperty({
            readOnly: true,
            dependencies: ["_photoProvider.progress", "_videoProvider.state", "_videoProvider.progress", "_metadataVideoProvider.state", "_metadataVideoProvider.progress"],
            get: function() {
              var e2 = this._videoProvider, t2 = this._metadataVideoProvider, r2 = e2.state, i2 = t2.state, n2 = "unloaded" !== r2 || "unloaded" !== i2 ? 0.75 : 0, a2 = n2 ? "unloaded" === i2 ? e2.progress : (e2.progress + t2.progress) / 2 : 0;
              return this._photoProvider.progress * (1 - n2) + a2 * n2;
            }
          }),
          photoTime: i.a.observableProperty({
            dependencies: ["_metadataVideoProvider.photoTime", "_videoProvider.photoTime"],
            get: function(e2) {
              return +e2 === e2 ? e2 : this._metadataVideoProvider.photoTime || this._videoProvider.photoTime || null;
            }
          }),
          videoRotation: i.a.observableProperty({
            dependencies: ["_videoProvider.videoRotation"],
            get: function(e2) {
              if (+e2 === e2) return e2;
              var t2 = this._videoProvider.videoRotation;
              return +t2 === t2 ? t2 : null;
            },
            set: function(e2) {
              return 90 * Math.round(e2 / 90) % 360 | 0;
            }
          }),
          frameTimes: i.a.observableProperty({
            dependencies: ["_metadataVideoProvider.frameTimes", "_videoProvider.frameTimes"],
            get: function(e2) {
              return e2 || this._metadataVideoProvider.frameTimes || this._videoProvider.frameTimes;
            },
            set: function(e2) {
              if (!e2) return null;
              if ("string" == typeof e2) {
                var t2 = i.a.arrayPool.get();
                i.a.String.splitIntoArray(e2, ",", t2), i.a.Array.mapIntoArray(t2, function(e3) {
                  return Number(e3.trim());
                }, t2), e2 = t2;
              }
              for (var r2 = Array.isArray(e2), n2 = r2 && e2.length >= 2, a2 = 0, o2 = e2.length; a2 < o2 && n2; a2++) {
                var s2 = e2[a2];
                +s2 !== s2 && (n2 = false);
              }
              if (!n2) throw new Error("If frameTimes is provided, it must be provided as an Array or comma-delimited string containing numbers.");
              return e2;
            }
          }),
          videoDuration: i.a.observableProperty({
            readOnly: true,
            dependencies: ["frameTimes"],
            get: function() {
              return this.frameTimes ? this.frameTimes[this.frameTimes.length - 1] : void 0;
            }
          }),
          proactivelyLoadsVideo: i.a.observableProperty(false),
          needsLoadedVideoForPlayback: i.a.observableProperty(false),
          _reset_needsLoadedVideoForPlayback_whenAppropriate: i.a.observer("video", function() {
            this.needsLoadedVideoForPlayback = false;
          }),
          isVideoLoadAllowed: i.a.observableProperty({
            readOnly: true,
            dependencies: ["proactivelyLoadsVideo", "needsLoadedVideoForPlayback"],
            get: function() {
              return this.proactivelyLoadsVideo || this.needsLoadedVideoForPlayback;
            }
          }),
          errors: i.a.observableProperty({
            readOnly: true,
            dependencies: ["_videoProvider.error", "_photoProvider.error"],
            get: function() {
              return [this._photoProvider.error, this._videoProvider.error].filter(function(e2) {
                return !!e2;
              });
            }
          }),
          lastError: i.a.observableProperty(),
          _lastPhotoError: i.a.observableProperty({
            readOnly: true,
            dependencies: ["_photoProvider.error"],
            get: function() {
              return this._photoProvider.error;
            },
            didChange: function(e2) {
              this.lastError = e2;
            }
          }),
          _lastVideoError: i.a.observableProperty({
            readOnly: true,
            dependencies: ["_videoProvider.error"],
            get: function() {
              return this._videoProvider.error;
            },
            didChange: function(e2) {
              this.lastError = e2;
            }
          }),
          _metadataVideoProvider: i.a.observableProperty(function() {
            return n.a.extend({
              requiresMimeTypeForRawArrayBufferSrc: false,
              actuallyProvidesResultingVideoFromSecondaryLoad: false
            }).create();
          }),
          _videoProvider: i.a.observableProperty(function() {
            return n.a.extend({
              owner: i.a.observableProperty(this),
              isSrcLoadAllowed: i.a.proxyProperty("owner.isVideoLoadAllowed"),
              exposedSrcKeyForErrorStrings: "videoSrc",
              exposedMimeTypeKeyForErrorStrings: "videoMimeType"
            }).create();
          }),
          _photoProvider: i.a.observableProperty(function() {
            return a.a.extend({
              exposedSrcKeyForErrorStrings: "photoSrc",
              exposedMimeTypeKeyForErrorStrings: "photoMimeType"
            }).create();
          })
        });
        t.a = u;
      }, function(e, t, r) {
        function i(e2) {
          var t2 = [0, 0, 0, 0, 0, 0, 0, 0, 1];
          t2[0] = n(e2.slice(0, 4), 16, 16), t2[1] = n(e2.slice(4, 8), 16, 16), t2[3] = n(e2.slice(12, 16), 16, 16), t2[4] = n(e2.slice(16, 20), 16, 16);
          for (var r2 = 0; r2 < m.length; r2++) {
            if (a(m[r2], t2)) return 90 * r2;
          }
          return 0;
        }
        function n(e2, t2, r2) {
          var i2 = e2[0] << 24 | e2[1] << 16 | e2[2] << 8 | e2[3];
          return Math.abs(i2 >> r2) * (0 != (i2 & 1 << t2 + r2 - 1) ? -1 : 1);
        }
        function a(e2, t2) {
          if (e2 === t2) return true;
          if (!e2 || !t2) return false;
          var r2 = e2.length;
          if (r2 !== t2.length) return false;
          for (var i2 = 0; i2 < r2; i2++) if (e2[i2] !== t2[i2]) return false;
          return true;
        }
        var o = r(16), s = r(45), u = r(0), l = r(5), d = r(6), c = r(2), h = r(3), p = [], f = {}, v = o.a.extend({
          __internalVideo: null,
          _internalVideoSRC: null,
          photoTime: u.a.observableProperty(),
          playbackStyle: u.a.observableProperty(null),
          effectType: u.a.observableProperty(null),
          frameTimes: u.a.observableProperty(),
          videoRotation: u.a.observableProperty(),
          actuallyProvidesResultingVideoFromSecondaryLoad: true,
          _clearMetadataPropertiesOnUnload: u.a.observer("state", function(e2) {
            "loaded" !== e2 && (this.photoTime = this.frameTimes = this.videoRotation = void 0);
          }),
          beginSecondaryLoad: function(e2, t2) {
            this.preprocessAndAttemptToReadMetadataFromBuffer(e2), this.actuallyProvidesResultingVideoFromSecondaryLoad && (p[0] = e2, f.type = "video/quicktime" === t2 ? "video/mp4" : t2, "application/octet-stream" === t2 && (l.a.warn('Encountered a Content-Type of "application/octet-stream" for the file obtained for `videoSrc`.Some browsers may be unable to use the video with this MIME type. If the video portion of the Player is not functioning, make sure the proper MIME type is being provided with the response,or provide the proper MIME type manually by assigning it to the `videoMimeType` property on the Player instance. For now, an attempt will be made to treat the video’s bytes as "video/mp4", but playback is not guaranteed unless either of these corrective steps are taken.'), t2 = "video/mp4"), this._internalVideo.src = this._internalVideoSRC = URL.createObjectURL(new Blob(p, f)), c.a.isIOS && this._internalVideo.load());
          },
          abortCurrentSecondaryLoad: function() {
            this.__internalVideo && (this.__internalVideo.pause(), this.__internalVideo.removeAttribute("src"), this.__internalVideo.load(), c.a.isIOS && (this.__internalVideo = null), this._internalVideoSRC && (URL.revokeObjectURL(this._internalVideoSRC), this._internalVideoSRC = null), this.effectType = null);
          },
          get _internalVideo() {
            var e2 = this.__internalVideo;
            return e2 || (e2 = this.__internalVideo = document.createElement("video"), e2.addEventListener("canplay", this.loadDidSucceed.bind(this)), e2.addEventListener("error", this.loadDidFail.bind(this)), e2.volume = 0), e2;
          },
          loadDidFail: function(e2) {
            if (e2) return e2.errCode = d.a.VIDEO_FAILED_TO_LOAD, this._super(e2);
            var t2 = this.__internalVideo;
            return t2.error.errCode = d.a.VIDEO_FAILED_TO_LOAD, t2 ? this._super(t2.error) : t2;
          },
          loadDidSucceed: function() {
            var e2 = this.__internalVideo;
            return e2 ? this._super(e2) : e2;
          },
          preprocessAndAttemptToReadMetadataFromBuffer: function(e2) {
            var t2 = void 0, r2 = void 0;
            try {
              t2 = new s.a(new s.b(e2)), t2.read();
            } catch (e3) {
              t2 = null;
            }
            if (!t2) return this.photoTime = null, this.frameTimes = null, void (this.videoRotation = 0);
            var n2 = (r2 = t2.tracks) && (r2 = r2.vide) && (r2 = r2[0]) && r2.getAllSampleSeconds && r2.getAllSampleSeconds();
            n2 && (this.frameTimes = n2);
            var a2 = void 0;
            try {
              a2 = t2.tracks.meta[0].timeToSeconds(t2.tracks.meta[0].trak.edts.elst.editList[0].trackDuration);
            } catch (e3) {
            }
            a2 && (this.photoTime = a2);
            var o2 = new Uint8Array(e2), u2 = (r2 = t2.tracks) && (r2 = r2.soun) && (r2 = r2[0]) && (r2 = r2.trak) && r2.offset;
            if (u2) {
              var l2 = "free";
              o2[u2 + 4] = l2.charCodeAt(0), o2[u2 + 5] = l2.charCodeAt(1), o2[u2 + 6] = l2.charCodeAt(2), o2[u2 + 7] = l2.charCodeAt(3);
            }
            var d2 = (r2 = t2.tracks) && (r2 = r2.vide) && (r2 = r2[0]) && (r2 = r2.trak) && (r2 = r2.tkhd) && (r2 = r2.offset) && r2 + 48, c2 = 0;
            if (d2) {
              for (var p2 = [], f2 = 0; f2 < y.length; f2++) p2[f2] = o2[d2 + f2];
              if (c2 = i(p2)) for (var v2 = 0; v2 < y.length; v2++) o2[d2 + v2] = y[v2];
            }
            this.videoRotation = c2;
            var m2 = t2.metaData.keys && t2.metaData.keys.keyList.get("com.apple.photos.variation-identifier"), g = void 0;
            if (m2 > 0) switch (t2.metaData.values.items[m2]) {
              case 1:
                g = h.a.LOOP;
                break;
              case 2:
                g = h.a.BOUNCE;
                break;
              case 3:
                g = h.a.EXPOSURE;
            }
            this.effectType = g;
          }
        }), y = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0], m = [[1, 0, 0, 0, 1, 0, 0, 0, 1], [0, 1, 0, -1, 0, 0, 0, 0, 1], [-1, 0, 0, 0, -1, 0, 0, 0, 1], [0, -1, 0, 1, 0, 0, 0, 0, 1]];
        t.a = v;
      }, function(e, t, r) {
        var i = r(4), n = r(1), a = r(2), o = a.a.isSafari, s = i.a.create({
          correspondingPlaybackStyle: n.a.FULL,
          get minimumShortenedDuration() {
            return this.enterDuration + this.exitDuration + 0.01;
          },
          get spontaneousFinishDuration() {
            return this.exitDuration;
          },
          enterDuration: 1 / 3,
          exitDuration: 0.5,
          videoBeginTime: 0.15,
          zoomScaleFactor: 1.075,
          blurRadius: 5,
          blurRadiusStep: 0.2,
          requiresInterpolation: true,
          quantizeRadius: function(e2) {
            return this.blurRadiusStep ? Math.round(e2 / this.blurRadiusStep) * this.blurRadiusStep : e2;
          },
          easeInOut: function(e2) {
            return e2 < 0 ? 0 : e2 > 1 ? 1 : 0.5 - 0.5 * Math.cos(e2 * Math.PI);
          },
          calculateAnimationDuration: function(e2, t2, r2) {
            var i2 = t2 ? t2 + this.videoBeginTime + this.exitDuration : 0;
            return Math.max(0, Math.min(e2 || 1 / 0, i2));
          },
          getEntranceExitParameter: function(e2, t2) {
            return Math.min(Math.max(0, Math.min(1, 1 - this.easeInOut((e2 - (t2 - this.exitDuration)) / this.exitDuration))), 1 - Math.max(0, Math.min(1, 1 - this.easeInOut(e2 / this.enterDuration)))) || 0;
          },
          getTransform: function(e2, t2, r2, i2) {
            var n2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, a2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1, o2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1, s2 = 1 + (this.zoomScaleFactor - 1) * this.getEntranceExitParameter(e2, t2), u = -(s2 - 1) / 2 * r2, l = -(s2 - 1) / 2 * i2, d = Math.round(u * devicePixelRatio) / devicePixelRatio, c = Math.round(l * devicePixelRatio) / devicePixelRatio;
            return Math.abs(s2 - n2) < 1e-5 ? "translate3d(" + d + "px, " + c + "px, 0) scale3d(" + a2 + ", " + o2 + ", 1)" : u || l || s2 ? "translate3d(" + u + "px, " + l + "px, 0) scale3d(" + s2 + ", " + s2 + ", 1)" : "translate3d(0, 0, 0)";
          },
          photo: i.a.PhotoIngredient.create({
            opacity: i.a.computedStyle(function(e2) {
              if (e2 < this.recipe.enterDuration) return (1 - this.recipe.easeInOut(e2 / this.recipe.enterDuration)).toString();
              if (e2 < this.renderer.duration - this.recipe.exitDuration) return "0";
              var t2 = this.recipe.easeInOut((e2 - (this.renderer.duration - this.recipe.exitDuration)) / this.recipe.exitDuration);
              return 1 !== t2 ? t2 : "1";
            }),
            display: i.a.computedStyle(function(e2) {
              return e2 > this.recipe.enterDuration && e2 < this.renderer.duration - this.recipe.exitDuration ? "none" : "";
            }),
            filter: i.a.computedStyle(function(e2) {
              if (!o) return "";
              var t2 = this.recipe, r2 = t2.blurRadius * t2.getEntranceExitParameter(e2, this.renderer.duration);
              return r2 ? "blur(" + t2.quantizeRadius(r2) + "px)" : "";
            }),
            transform: i.a.computedStyle(function(e2) {
              return this.recipe.getTransform(e2, this.renderer.duration, this.displayWidth, this.displayHeight);
            }),
            zIndex: i.a.computedStyle(function() {
              return 3;
            })
          }),
          video: i.a.InterpolatedVideoIngredient.create({
            get backingScaleFactor() {
              return this.recipe.zoomScaleFactor;
            },
            lookaheadTime: 0.01 + 7 / 15,
            videoTimeAtTime: function(e2) {
              var t2 = Math.max(0, Math.min(this.videoDuration, e2 - this.recipe.videoBeginTime));
              return Math.min(t2, this.renderer.duration - this.recipe.exitDuration - this.recipe.videoBeginTime);
            },
            prepareVideoFramesFromTime: function(e2) {
              this.retainFramesForTime(e2, e2 + this.lookaheadTime);
            },
            display: i.a.computedStyle(function(e2) {
              return 0 === e2 || e2 === this.renderer.duration ? "none" : "";
            }),
            transform: i.a.computedStyle(function(e2) {
              return this.recipe.getTransform(e2, this.renderer.duration, this.displayWidth, this.displayHeight, this.backingScaleFactor, this.backingScaleX, this.backingScaleY);
            }),
            zIndex: i.a.computedStyle(function() {
              return 1;
            })
          })
        });
        t.a = s;
      }, function(e, t, r) {
        var i = r(4), n = r(1), a = i.a.create({
          correspondingPlaybackStyle: n.a.HINT,
          minimumShortenedDuration: 0.9,
          get spontaneousFinishDuration() {
            return this.exitBlurDuration;
          },
          exitBlurDuration: 0.75,
          bottomVideoRevealBeginTime: 0.1,
          zoomScaleFactor: 1.075,
          blurRadius: 7.5,
          blurRadiusStep: 1,
          requiresInterpolation: true,
          quantizeRadius: function(e2) {
            return Math.round(e2 / this.blurRadiusStep) * this.blurRadiusStep;
          },
          tween: function(e2) {
            return e2 < 0 ? 0 : e2 > 1 ? 1 : 0.5 - 0.5 * Math.cos(e2 * Math.PI);
          },
          calculateAnimationDuration: function(e2, t2, r2) {
            var i2 = t2 ? t2 - r2 + this.exitBlurDuration : 0;
            return Math.max(0, Math.min(e2 || 1 / 0, i2));
          },
          photo: i.a.PhotoIngredient.create({
            hideDuration: 0.06,
            get returnDuration() {
              return this.recipe.exitBlurDuration;
            },
            opacity: i.a.computedStyle(function(e2) {
              if (e2 < this.hideDuration) return (1 - this.recipe.tween(e2 / this.hideDuration)).toString();
              if (e2 < this.renderer.duration - this.returnDuration) return "0";
              var t2 = this.recipe.tween((e2 - (this.renderer.duration - this.returnDuration)) / this.returnDuration);
              return 1 !== t2 ? t2.toString() : "";
            }),
            display: i.a.computedStyle(function(e2) {
              return e2 > this.hideDuration && e2 < this.renderer.duration - this.returnDuration ? "none" : "";
            }),
            webkitFilter: i.a.computedStyle(function(e2) {
              if (e2 < this.renderer.duration - this.returnDuration) return "";
              var t2 = this.recipe.blurRadius * (1 - this.recipe.tween((e2 - (this.renderer.duration - this.returnDuration)) / this.returnDuration));
              return t2 ? "blur(" + this.recipe.quantizeRadius(t2) + "px)" : "";
            }),
            transform: i.a.computedStyle(function(e2) {
              if (e2 < this.renderer.duration - this.returnDuration) return "translateZ(0)";
              var t2 = 1 + (this.recipe.zoomScaleFactor - 1) * (1 - this.recipe.tween((e2 - (this.renderer.duration - this.returnDuration)) / this.returnDuration));
              return "translate3d(" + -(t2 - 1) / 2 * this.displayWidth + "px, " + -(t2 - 1) / 2 * this.displayHeight + "px, 0) scale3d(" + t2 + ", " + t2 + ", 1)";
            }),
            zIndex: i.a.computedStyle(function() {
              return 3;
            })
          }),
          video: i.a.InterpolatedVideoIngredient.create({
            get backingScaleFactor() {
              return this.recipe.zoomScaleFactor;
            },
            scaleInDuration: 0.15,
            get blurOutDuration() {
              return this.recipe.exitBlurDuration;
            },
            lookaheadTime: 0.01 + 7 / 15,
            videoTimeAtTime: function(e2) {
              return Math.min(this.videoDuration, e2 + this.renderer.photoTime);
            },
            prepareVideoFramesFromTime: function(e2) {
              this.retainFramesForTime(e2, e2 + this.lookaheadTime);
            },
            display: i.a.computedStyle(function(e2) {
              return e2 && e2 !== this.renderer.duration ? "" : "none";
            }),
            transform: i.a.computedStyle(function(e2) {
              var t2 = 1 + (this.recipe.zoomScaleFactor - 1) * Math.max(0, Math.min(1, 1 - this.recipe.tween((e2 - (this.renderer.duration - this.blurOutDuration)) / this.blurOutDuration) - (1 - this.recipe.tween(e2 / this.scaleInDuration)))), r2 = -(t2 - 1) / 2 * this.displayWidth, i2 = -(t2 - 1) / 2 * this.displayHeight, n2 = Math.round(r2 * devicePixelRatio) / devicePixelRatio, a2 = Math.round(i2 * devicePixelRatio) / devicePixelRatio;
              return Math.abs(t2 - this.backingScaleFactor) < 1e-5 ? "translate3d(" + n2 + "px, " + a2 + "px, 0) scale3d(" + this.backingScaleX + ", " + this.backingScaleY + ", 1)" : "translate3d(" + r2 + "px, " + i2 + "px, 0) scale3d(" + t2 + ", " + t2 + ", 1)";
            }),
            webkitFilter: i.a.computedStyle(function(e2) {
              var t2 = this.recipe.blurRadius * this.recipe.tween((e2 - (this.renderer.duration - this.blurOutDuration)) / this.blurOutDuration);
              return t2 ? "blur(" + this.recipe.quantizeRadius(t2) + "px)" : "";
            }),
            zIndex: i.a.computedStyle(function() {
              return 1;
            })
          })
        });
        t.a = a;
      }, function(e, t, r) {
        var i = r(4), n = r(2), a = (n.a.isSafari, i.a.create({
          requiresInterpolation: true,
          photo: i.a.PhotoIngredient.create({
            display: i.a.computedStyle(function(e2) {
              return this.isPlaying || e2 > 0 ? "none" : "";
            })
          }),
          video: i.a.InterpolatedVideoIngredient.create({
            lookaheadTime: 0.01 + 7 / 15,
            videoTimeAtTime: function(e2) {
              return e2 % this.renderer.duration;
            },
            prepareVideoFramesFromTime: function(e2) {
              this.retainFramesForTime(e2, e2 + this.lookaheadTime);
            },
            display: i.a.computedStyle(function(e2) {
              return "";
            })
          }),
          beginFinishingPlaybackEarly: function(e2) {
            e2.autoplay || (e2.isPlaying ? e2.pause() : e2.wantsToPlay = false);
          },
          continuePlayback: function(e2) {
            var t2 = e2.currentTime, r2 = e2.duration;
            t2 >= r2 && (e2.currentTime = t2 % r2), e2._rafID = requestAnimationFrame(e2._nextFrame.bind(e2));
          }
        }));
        t.a = a;
      }, function(e, t, r) {
        var i = r(4), n = r(36), a = r(1);
        n.a.register();
        var o = i.a.create({
          correspondingPlaybackStyle: a.a.LOOP,
          photo: i.a.PhotoIngredient.create({
            display: i.a.computedStyle(function(e2) {
              return this.isPlaying || e2 > 0 ? "none" : "";
            })
          }),
          video: i.a.VideoIngredient.create({
            display: i.a.computedStyle(function(e2) {
              return "";
            })
          }),
          beginFinishingPlaybackEarly: function(e2) {
            e2.autoplay || (e2.isPlaying ? e2.pause() : e2.wantsToPlay = false);
          },
          continuePlayback: function(e2) {
            var t2 = e2.currentTime, r2 = e2.duration;
            t2 >= r2 && (e2.currentTime = t2 % r2), e2._rafID = requestAnimationFrame(e2._nextFrame.bind(e2));
          },
          requestMoreCompatibleRecipe: function(e2) {
            return i.a.registerRecipeWithPlaybackStyle(n.a, this.correspondingPlaybackStyle), n.a;
          }
        });
        t.a = o;
      }, function(e, t, r) {
        var i = r(0), n = r(41), a = r(1), o = r(13), s = n.a.extend(o.a, {
          _loCanvas: null,
          _hiCanvas: null,
          backingScaleFactor: 1,
          setUpForRender: function() {
            var e2 = this.element, t2 = (this.isPlaying, this.renderer), r2 = t2.autoplay, n2 = t2.parentView, o2 = t2.playbackStyle, s2 = t2.video;
            if (!this._loCanvas || !this._hiCanvas) {
              e2.innerHTML && (e2.innerHTML = "");
              var u = this._loCanvas = i.a.canvasPool.get(), l = this._hiCanvas = i.a.canvasPool.get();
              u._context = u.getContext("2d"), l._context = l.getContext("2d"), u.style.cssText = l.style.cssText = "position: absolute; left: 0; top: 0; width: 100%; height: 100%; transform: translateZ(0);", e2.appendChild(u), e2.appendChild(l), this._swapCanvases();
            }
            e2.className = "lpk-render-layer lpk-video", e2.style.position = "absolute", e2.style.transformOrigin = "0 0", e2.style.zIndex = 1, this._super(), o2 === a.a.LOOP && (this.shouldLoop = true), this.shouldLoop && requestAnimationFrame(function() {
              s2.currentTime = -1, r2 && n2.play();
            }), window.test = this;
          },
          updateSize: function(e2, t2) {
            if (!arguments.length) return this._super();
            this._super(e2, t2);
            var r2 = Math.ceil(e2 * this.backingScaleFactor), i2 = Math.ceil(t2 * this.backingScaleFactor);
            this.backingScaleX = r2 / e2, this.backingScaleY = i2 / t2, this.element.style.width = r2 + "px", this.element.style.height = i2 + "px", this._loCanvas && this._hiCanvas && (this._loCanvas.width = this._hiCanvas.width = r2 * devicePixelRatio, this._loCanvas.height = this._hiCanvas.height = i2 * devicePixelRatio, this._loCanvas._drawnFrameNumber = this._hiCanvas._drawnFrameNumber = -1, this.renderAtTime());
          },
          renderAtTime: function(e2) {
            if (!arguments.length) return this._super();
            this._super(e2);
            var t2 = this.backingScaleX, r2 = this.backingScaleY;
            1 === t2 && 1 === r2 || (this.element.style.transform += " scale3d(" + 1 / t2 + ", " + 1 / r2 + ", 1)");
          },
          renderFramePair: function(e2, t2, r2) {
            (e2 && this._hiCanvas._drawnFrameNumber === e2.number || t2 && this._loCanvas._drawnFrameNumber === t2.number) && this._swapCanvases(), this._putFrameInCanvasIfNeeded(e2, this._loCanvas), this._putFrameInCanvasIfNeeded(t2, this._hiCanvas), t2 && (this._hiCanvas.style.opacity = r2);
          },
          _swapCanvases: function() {
            var e2 = this._hiCanvas;
            this._hiCanvas = this._loCanvas, this._loCanvas = e2, this._loCanvas.style.opacity = "", this._loCanvas.style.zIndex = 1, this._hiCanvas.style.zIndex = 2;
          },
          _putFrameInCanvasIfNeeded: function(e2, t2) {
            t2._drawnFrameNumber !== (t2._drawnFrameNumber = e2 ? e2.number : -1) && (t2.setAttribute("data-frame-number", t2._drawnFrameNumber.toString()), e2 ? t2._context.drawImage(e2.image, 0, 0, t2.width, t2.height) : t2._context.clearRect(0, 0, t2.width, t2.height));
          },
          dispose: function() {
            this._super(), this._loCanvas && i.a.canvasPool.ret(this._loCanvas), this._hiCanvas && i.a.canvasPool.ret(this._hiCanvas);
          },
          tearDownFromRender: function() {
            var e2 = this.renderer, t2 = e2.parentView;
            this.shouldLoop = false, t2 && t2.stop(), this._clearAllRetainedFrames(), this._super();
          }
        });
        t.a = s;
      }, function(e, t, r) {
        var i = r(42), n = r(13), a = r(49), o = i.a.extend(n.a, {
          tagName: "canvas",
          get _canvas() {
            return this.element;
          },
          get _context() {
            return this.__context || (this.__context = this._canvas.getContext("2d"));
          },
          init: function() {
            this._super.apply(this, arguments), this.element.className = "lpk-render-layer lpk-photo", this.element.style.position = "absolute", this.element.style.width = this.element.style.height = "100%", this.element.style.transformOrigin = "0 0", this.element.style.zIndex = 2;
          },
          tearDownFromRender: function() {
            this._super(), this._canvas.width = this._canvas.height = 0;
          },
          updateSize: function(e2, t2) {
            if (!arguments.length) return this._super();
            this._super(e2, t2);
            var i2 = Math.ceil(e2 * devicePixelRatio), n2 = Math.ceil(t2 * devicePixelRatio), o2 = this.photo, s = this._canvas;
            this._lastPhoto === (this._lastPhoto = o2) && s.width === i2 && s.height === n2 || (s.width = i2, s.height = n2, o2 && r.i(a.a)(this._context, o2, 0, 0, i2, n2));
          }
        });
        t.a = o;
      }, function(e, t, r) {
        var i = r(0), n = r(2), a = r(13), o = r(43), s = o.a.extend(a.a, {
          _isPlayingChanged: i.a.observer("isPlaying", function(e2) {
            this._video && (e2 ? (this.duration = 1 / 0, this.play()) : this.pause());
          }),
          _isVisible: false,
          applyStyles: function() {
            var e2 = this.element, t2 = this.video, r2 = this.videoRotation, i2 = t2.videoHeight, n2 = t2.videoWidth, a2 = 1;
            [90, 270].indexOf(r2) >= 0 && (a2 = n2 / i2);
            var o2 = "\n                height: 100%;\n                position: absolute;\n                width: 100%;\n                -moz-transform: scale(" + a2 + ") rotate(" + r2 + "deg);\n                -webkit-transform: scale(" + a2 + ") rotate(" + r2 + "deg);\n                -o-transform: scale(" + a2 + ") rotate(" + r2 + "deg);\n                -ms-transform: scale(" + a2 + ") rotate(" + r2 + "deg);\n                transform: scale(" + a2 + ") rotate(" + r2 + "deg);\n                z-index: 1;\n            ";
            e2.setAttribute("style", o2), e2.className = "lpk-render-layer lpk-video", t2.style.height = "100%", t2.style.width = "100%";
          },
          cleanupElement: function() {
            var e2 = this.element, t2 = this.renderer, r2 = this._video, i2 = t2.parentView;
            e2.innerHtml && (e2.innerHtml = ""), r2 && (r2.loop = false, r2.muted = false, r2.removeEventListener("pause", this.playIfPlaying)), i2 && i2.stop(), delete this._video;
          },
          pause: function() {
            var e2 = this._isVisible, t2 = this._video;
            e2 && t2.pause();
          },
          play: function() {
            if (this._isVisible) {
              var e2 = this._video, t2 = e2.play();
              t2 ? t2.catch(this._handlePlayFailure) : n.a.isIE || n.a.isEdge || (e2.pause(), setTimeout(this._handlePlayFailure));
            }
          },
          _handlePlayFailure: i.a.boundFunction(function() {
            this.renderer.requestMoreCompatibleRecipe();
          }),
          playIfPlaying: i.a.boundFunction(function() {
            var e2 = this.isPlaying, t2 = this._video;
            if (e2 && t2.paused) {
              var r2 = t2.play();
              r2 && r2.catch(function() {
              });
            }
          }),
          setUpForRender: function() {
            var e2 = this.element, t2 = (this.isPlaying, this.renderer), r2 = t2.autoplay, i2 = t2.parentView, n2 = t2.video;
            this.cleanupElement(), e2.appendChild(n2), this.applyStyles(), n2.loop = true, n2.muted = true, this._video = n2, this._isVisible = true, this._super(), r2 && (n2.addEventListener("pause", this.playIfPlaying), i2.play());
          },
          tearDownFromRender: function() {
            this.cleanupElement(), this._isVisible = false, this._super();
          }
        });
        t.a = s;
      }, function(e, t, r) {
        function i(e2) {
          e2.retain();
        }
        function n(e2) {
          e2.release();
        }
        var a = r(0), o = r(7), s = r(17), u = o.a.extend({
          videoDecoder: a.a.proxyProperty("renderer.videoDecoder"),
          videoDuration: a.a.proxyProperty("videoDecoder.duration"),
          canRender: a.a.proxyProperty({
            readOnly: true,
            proxyPath: "videoDecoder.canProvideFrames"
          }),
          init: function() {
            this._super.apply(this, arguments);
            var e2 = this.layerName, t2 = this.recipe;
            this._framePrepIDKey = t2.name + "_" + e2 + "_framePrepID";
          },
          videoTimeAtTime: function(e2) {
            return e2;
          },
          _videoTimeAtTime: function(e2) {
            return isNaN(e2) ? e2 : this.videoTimeAtTime(e2);
          },
          prepareToRenderAtTime: function(e2) {
            var t2 = this._currentPrepID = ++l;
            if (!this.canRender) return false;
            this.prepareVideoFramesFromTime(e2);
            for (var r2, i2 = this._retainedFrames, n2 = 0, a2 = 0; r2 = i2[a2]; a2++) 2 !== r2.readyState && (r2[this._framePrepIDKey] = t2, r2.onReadyOrFail(this._frameDidPrepare), n2++);
            return this._preppingFrameCount = n2, !n2;
          },
          reduceMemoryFootprint: function() {
            this._super(), this._clearAllRetainedFrames();
          },
          _clearAllRetainedFrames: function() {
            this._clearExtraRetainedFrames(), this._clearRetainedInstantaneousFrames();
          },
          _clearExtraRetainedFrames: function() {
            var e2 = this._retainedFrames;
            e2 && (e2.forEach(n), e2.length = 0);
          },
          _clearRetainedInstantaneousFrames: function() {
            this._retainedLoFrame && this._retainedLoFrame.release(), this._retainedHiFrame && this._retainedHiFrame.release(), this._retainedLoFrame = this._retainedHiFrame = null;
          },
          _frameDidPrepare: a.a.boundFunction(function(e2) {
            e2[this._framePrepIDKey] === this._currentPrepID && (e2[this._framePrepIDKey] = void 0, --this._preppingFrameCount || this.renderer.prepareToRenderAtTime(this.renderer.currentTime));
          }),
          prepareVideoFramesFromTime: function(e2) {
            this.retainFramesForTime(e2);
          },
          canRenderAtTime: function(e2) {
            if ("none" === this.display(e2)) return true;
            if (!this.canRender) return false;
            for (var t2, r2 = true, i2 = this.requiredFramesForTime(e2), n2 = 0; t2 = i2[n2]; n2++) r2 = r2 && 2 === t2.readyState, t2.retain().release();
            return r2;
          },
          renderAtTime: function(e2) {
            if (!arguments.length) return this._super();
            if ("none" === this.display(e2)) return this._clearRetainedInstantaneousFrames(), this._super(e2);
            var t2 = this._videoTimeAtTime(e2), r2 = this.requiredFramesForVideoTime(t2), i2 = r2[0] || null, n2 = r2[1] || null;
            if (i2 && i2.retain(), n2 && n2.retain(), this._clearRetainedInstantaneousFrames(), this._retainedLoFrame = i2, this._retainedHiFrame = n2, i2 && (i2 = i2.backingFrame), n2 && (n2 = n2.backingFrame), i2 && n2 && i2.number > n2.number) {
              var a2 = i2;
              n2 = i2, i2 = a2;
            }
            i2 === n2 && (n2 = null);
            var o2 = !i2 || n2 ? this.videoDecoder.fractionalIndexForTime(t2) : i2.frameNumber, s2 = o2 - (0 | o2);
            this.renderFramePair(i2, n2, s2), this._super(e2);
          },
          renderFramePair: function() {
          },
          requiredFramesForVideoTime: function(e2, t2, r2) {
            isNaN(t2) && (t2 = e2);
            var i2 = this.videoDecoder, n2 = this.videoDuration, a2 = i2.frameCount, o2 = d;
            if (o2.length = 0, t2 < 0 || e2 > n2 || isNaN(e2) || isNaN(t2)) return o2;
            var u2 = Math.max(0, Math.floor(i2.fractionalIndexForTime(e2))), l2 = Math.min(i2.frameCount, Math.ceil(i2.fractionalIndexForTime(t2))), c = l2 < u2, h = c ? a2 - 1 : l2;
            if (u2 === h - 1) {
              var p = i2.frameTimes;
              p[h] - p[u2] < 1 / 30 + 1e-3 && (h = u2);
            }
            for (var f = u2; f <= h; f++) s.a && 0 === f || (o2.push(i2.getFrame(f, r2)), f + 1 === a2 && c && (f = -1, h = l2));
            return o2;
          },
          requiredFramesForTime: function(e2, t2, r2) {
            return this.requiredFramesForVideoTime(this._videoTimeAtTime(e2), this._videoTimeAtTime(t2), r2);
          },
          retainFramesForVideoTime: function(e2, t2, r2) {
            void 0 === t2 && (t2 = e2);
            var a2 = this.lookaheadTime, o2 = this.shouldLoop, s2 = this.requiredFramesForVideoTime(e2, t2, r2), u2 = this._retainedFrames || (this._retainedFrames = []);
            s2.forEach(i);
            for (var l2 = u2.length - 1; l2 >= 0; l2--) {
              var d2 = u2[l2], c = d2.time;
              (!o2 || c > a2 / 2) && (n(d2), u2.splice(l2, 1));
            }
            u2.push.apply(u2, s2);
          },
          retainFramesForTime: function(e2, t2, r2) {
            return this.retainFramesForVideoTime(this._videoTimeAtTime(e2), this._videoTimeAtTime(t2), r2);
          },
          dispose: function() {
            this.retainFramesForVideoTime(NaN), this._super();
          }
        }), l = 1, d = [];
        t.a = u;
      }, function(e, t, r) {
        var i = r(7), n = r(0), a = i.a.extend({
          isPlaying: n.a.proxyProperty({
            readOnly: true,
            proxyPath: "renderer.parentView.isPlaying"
          }),
          photo: n.a.proxyProperty({
            readOnly: true,
            proxyPath: "renderer.photo"
          }),
          canRender: n.a.proxyProperty("photo"),
          canRenderAtTime: function(e2) {
            var t2 = this.photo;
            return !("none" !== this.display(e2) && (!t2 || t2 instanceof Image && !t2.complete));
          }
        });
        t.a = a;
      }, function(e, t, r) {
        var i = r(7), n = r(0), a = i.a.extend({
          canRender: n.a.proxyProperty({
            readOnly: true,
            proxyPath: "video"
          }),
          isPlaying: n.a.proxyProperty({
            readOnly: true,
            proxyPath: "renderer.parentView.isPlaying"
          }),
          video: n.a.proxyProperty({
            readOnly: true,
            proxyPath: "renderer.video"
          }),
          videoRotation: n.a.proxyProperty({
            readOnly: true,
            proxyPath: "renderer.provider.videoRotation"
          })
        });
        t.a = a;
      }, function(e, t, r) {
        function i(e2, t2) {
          if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        }
        function n(e2) {
          var t2 = r.i(o.a)(e2), i2 = l.get(t2);
          if (i2) return i2;
          var n2 = e2.map(function(e3) {
            if ("i" === e3[0] && h(e3[1])) return "I" + e3.substring(1);
          });
          return e2 = e2.concat(n2.filter(function(e3) {
            return !!e3;
          })), i2 = new RegExp(e2.join("|"), "g"), l.set(t2, i2), i2;
        }
        function a(e2, t2) {
          var r2 = e2.charCodeAt(0), i2 = t2.charCodeAt(0), n2 = /* @__PURE__ */ new Map();
          return function(e3) {
            var t3 = n2.get(e3);
            if (void 0 !== t3) return t3;
            var a2 = e3.charCodeAt(0);
            return t3 = a2 >= r2 && a2 <= i2, n2.set(e3, t3), t3;
          };
        }
        var o = r(20), s = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var r2 = 0; r2 < t2.length; r2++) {
              var i2 = t2[r2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, r2, i2) {
            return r2 && e2(t2.prototype, r2), i2 && e2(t2, i2), t2;
          };
        }(), u = ["iOS", "iPhone", "iPad", "iPod", "WebKit"], l = /* @__PURE__ */ new Map(), d = a("0", "9"), c = a("a", "z"), h = a("A", "Z"), p = function(e2) {
          return c(e2) || h(e2);
        }, f = function(e2) {
          return p(e2) || d(e2);
        }, v = /* @__PURE__ */ new Map(), y = function() {
          function e2() {
            i(this, e2);
          }
          return s(e2, null, [{
            key: "splitIntoArray",
            value: function(e3, t2, r2) {
              for (var i2 = e3.indexOf(t2), n2 = 0, a2 = t2.length; -1 !== i2; ) r2.push(e3.substring(n2, i2)), n2 = i2 + a2, i2 = e3.indexOf(t2, n2);
              r2.push(e3.substring(n2));
            }
          }, {
            key: "hyphenate",
            value: function(t2, i2, n2) {
              if (!t2) return "";
              i2 || null === i2 || false === i2 || (i2 = u);
              var a2 = i2 || n2 ? r.i(o.a)(i2) + "#" + t2 + "#" + !!n2 : t2, s2 = v.get(a2);
              if (s2) return s2;
              if (Array.isArray(i2)) {
                var l2 = e2.hyphenateCarefully(t2, i2, n2);
                return v.set(a2, l2), l2;
              }
              var y2 = t2.length, m = "", g = void 0, b = void 0, _ = void 0, P = void 0, k = void 0;
              for (g = 0; g < y2; g++) b = t2[g - 1], _ = t2[g], P = _.toLowerCase(), k = t2[g + 1], b && f(_) && f(b) && (!h(b) && h(_) || d(b) && p(_) || k && h(b) && h(_) && c(k)) ? m += "-" + P : m += P;
              return v.set(a2, m), m;
            }
          }, {
            key: "hyphenateCarefully",
            value: function(t2, r2, i2) {
              var a2 = n(r2), o2 = t2.match(a2);
              if (!o2 || !o2.length) return e2.hyphenate(t2, null, i2);
              for (var s2 = t2.split(a2), u2 = e2.hyphenate(s2[0]), l2 = 0, d2 = o2.length; l2 < d2; l2++) {
                var c2 = o2[l2];
                i2 || (c2 = c2.toLowerCase());
                var h2 = s2[l2 + 1];
                h2 && (h2 = e2.hyphenate(h2, null, i2)), u2 += (u2 && "-") + c2, h2 && (u2 += (p(h2[0]) ? "-" : "") + h2);
              }
              return u2;
            }
          }]), e2;
        }();
        t.a = y;
      }, function(e, t, r) {
        function i(e2, t2) {
          if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        }
        function n(e2, t2) {
          e2 || a(t2);
        }
        function a(e2) {
          throw e2;
        }
        var o = r(5);
        r.d(t, "b", function() {
          return u;
        }), r.d(t, "a", function() {
          return l;
        });
        var s = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var r2 = 0; r2 < t2.length; r2++) {
              var i2 = t2[r2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, r2, i2) {
            return r2 && e2(t2.prototype, r2), i2 && e2(t2, i2), t2;
          };
        }(), u = (function() {
          function e2(t2, r2) {
            i(this, e2), this.w = t2, this.h = r2;
          }
          s(e2, [{
            key: "toString",
            value: function() {
              return "(" + this.w + ", " + this.h + ")";
            }
          }, {
            key: "getHalfSize",
            value: function() {
              return new e2(this.w >>> 1, this.h >>> 1);
            }
          }, {
            key: "length",
            value: function() {
              return this.w * this.h;
            }
          }]);
        }(), function() {
          function e2(t2, r2, n2) {
            i(this, e2), this.bytes = new Uint8Array(t2), this.start = r2 || 0, this.pos = this.start, this.end = r2 + n2 || this.bytes.length;
          }
          return s(e2, [{
            key: "readU8Array",
            value: function(e3) {
              if (this.pos > this.end - e3) return null;
              var t2 = this.bytes.subarray(this.pos, this.pos + e3);
              return this.pos += e3, t2;
            }
          }, {
            key: "readU32Array",
            value: function(e3, t2, r2) {
              if (t2 = t2 || 1, this.pos > this.end - e3 * t2 * 4) return null;
              if (1 === t2) {
                for (var i2 = new Uint32Array(e3), n2 = 0; n2 < e3; n2++) i2[n2] = this.readU32();
                return i2;
              }
              for (var a2 = new Array(e3), o2 = 0; o2 < e3; o2++) {
                var s2 = null;
                if (r2) {
                  s2 = {};
                  for (var u2 = 0; u2 < t2; u2++) s2[r2[u2]] = this.readU32();
                } else {
                  s2 = new Uint32Array(t2);
                  for (var l2 = 0; l2 < t2; l2++) s2[l2] = this.readU32();
                }
                a2[o2] = s2;
              }
              return a2;
            }
          }, {
            key: "read8",
            value: function() {
              return this.readU8() << 24 >> 24;
            }
          }, {
            key: "readU8",
            value: function() {
              return this.pos >= this.end ? null : this.bytes[this.pos++];
            }
          }, {
            key: "read16",
            value: function() {
              return this.readU16() << 16 >> 16;
            }
          }, {
            key: "readU16",
            value: function() {
              if (this.pos >= this.end - 1) return null;
              var e3 = this.bytes[this.pos + 0] << 8 | this.bytes[this.pos + 1];
              return this.pos += 2, e3;
            }
          }, {
            key: "read24",
            value: function() {
              return this.readU24() << 8 >> 8;
            }
          }, {
            key: "readU24",
            value: function() {
              var e3 = this.pos, t2 = this.bytes;
              if (e3 > this.end - 3) return null;
              var r2 = t2[e3 + 0] << 16 | t2[e3 + 1] << 8 | t2[e3 + 2];
              return this.pos += 3, r2;
            }
          }, {
            key: "peek32",
            value: function(e3) {
              var t2 = this.pos, r2 = this.bytes;
              if (t2 > this.end - 4) return null;
              var i2 = r2[t2 + 0] << 24 | r2[t2 + 1] << 16 | r2[t2 + 2] << 8 | r2[t2 + 3];
              return e3 && (this.pos += 4), i2;
            }
          }, {
            key: "read32",
            value: function() {
              return this.peek32(true);
            }
          }, {
            key: "readU32",
            value: function() {
              return this.peek32(true) >>> 0;
            }
          }, {
            key: "read4CC",
            value: function() {
              var e3 = this.pos;
              if (e3 > this.end - 4) return null;
              for (var t2 = "", r2 = 0; r2 < 4; r2++) t2 += String.fromCharCode(this.bytes[e3 + r2]);
              return this.pos += 4, t2;
            }
          }, {
            key: "readFP16",
            value: function() {
              return this.read32() / 65536;
            }
          }, {
            key: "readFP8",
            value: function() {
              return this.read16() / 256;
            }
          }, {
            key: "readISO639",
            value: function() {
              for (var e3 = this.readU16(), t2 = "", r2 = 0; r2 < 3; r2++) {
                var i2 = e3 >>> 5 * (2 - r2) & 31;
                t2 += String.fromCharCode(i2 + 96);
              }
              return t2;
            }
          }, {
            key: "readUTF8",
            value: function(e3) {
              for (var t2 = "", r2 = 0; r2 < e3; r2++) t2 += String.fromCharCode(this.readU8());
              return t2;
            }
          }, {
            key: "readPString",
            value: function(e3) {
              var t2 = this.readU8();
              n(t2 <= e3);
              var r2 = this.readUTF8(t2);
              return this.reserved(e3 - t2 - 1, 0), r2;
            }
          }, {
            key: "skip",
            value: function(e3) {
              this.seek(this.pos + e3);
            }
          }, {
            key: "reserved",
            value: function(e3, t2) {
              for (var r2 = 0; r2 < e3; r2++) n(this.readU8() === t2);
            }
          }, {
            key: "seek",
            value: function(e3) {
              (e3 < 0 || e3 > this.end) && a("Index out of bounds (bounds: [0, " + this.end + "], index: " + e3 + ")."), this.pos = e3;
            }
          }, {
            key: "subStream",
            value: function(t2, r2) {
              return new e2(this.bytes.buffer, t2, r2);
            }
          }, {
            key: "uint",
            value: function(e3) {
              for (var t2 = this.position, r2 = t2 + e3, i2 = 0, n2 = t2; n2 < r2; n2++) i2 <<= 8, i2 |= 255 & this.readU8();
              return i2;
            }
          }, {
            key: "length",
            get: function() {
              return this.end - this.start;
            }
          }, {
            key: "position",
            get: function() {
              return this.pos;
            }
          }, {
            key: "remaining",
            get: function() {
              return this.end - this.pos;
            }
          }]), e2;
        }()), l = function() {
          function e2(t2) {
            i(this, e2), this.stream = t2, this.tracks = {}, this.metaData = {};
          }
          return s(e2, [{
            key: "getPath",
            value: function(e3) {
              for (var t2 = e3.split("."), r2 = this, i2 = 0, n2 = t2.length; i2 < n2; i2++) r2 = r2 ? r2[t2[i2]] : void 0;
              return r2;
            }
          }, {
            key: "readBoxes",
            value: function(e3, t2) {
              for (; e3.peek32(); ) {
                var r2 = this.readBox(e3);
                if (r2.type in t2) {
                  var i2 = t2[r2.type];
                  Array.isArray(i2) || (t2[r2.type] = [i2]), t2[r2.type].push(r2);
                } else t2[r2.type] = r2;
              }
            }
          }, {
            key: "readBox",
            value: function(e3) {
              function t2() {
                o2.version = e3.readU8(), o2.flags = e3.readU24();
              }
              function r2() {
                return o2.size - (e3.position - o2.offset);
              }
              function i2() {
                e3.skip(r2());
              }
              function a2() {
                var t3 = e3.subStream(e3.position, r2());
                s2.readBoxes(t3, o2), e3.skip(t3.length);
              }
              var o2 = {
                offset: e3.position
              }, s2 = this;
              !function() {
                o2.size = e3.readU32(), o2.type = e3.read4CC();
              }();
              var u2 = void 0, l2 = void 0, c = void 0;
              switch (o2.type) {
                case "ftyp":
                  var h = o2;
                  h.name = "File Type Box", h.majorBrand = e3.read4CC(), h.minorVersion = e3.readU32(), h.compatibleBrands = new Array((h.size - 16) / 4);
                  for (var p = 0; p < h.compatibleBrands.length; p++) h.compatibleBrands[p] = e3.read4CC();
                  break;
                case "moov":
                  o2.name = "Movie Box", a2();
                  break;
                case "mvhd":
                  var f = o2;
                  f.name = "Movie Header Box", t2(), n(0 == f.version), f.creationTime = e3.readU32(), f.modificationTime = e3.readU32(), f.timeScale = e3.readU32(), f.duration = e3.readU32(), f.rate = e3.readFP16(), f.volume = e3.readFP8(), e3.skip(10), f.matrix = e3.readU32Array(9), e3.skip(24), f.nextTrackId = e3.readU32();
                  break;
                case "trak":
                  var v = o2;
                  v.name = "Track Box", a2();
                  var y = new d(this, v), m = v.mdia && v.mdia.hdlr && v.mdia.hdlr.handlerType || "unknownHandlerType", g = this.tracks;
                  (g[m] || (g[m] = [])).push(y), g[v.tkhd.trackId] = y;
                  break;
                case "tkhd":
                  var b = o2;
                  b.name = "Track Header Box", t2(), n(0 == b.version), b.creationTime = e3.readU32(), b.modificationTime = e3.readU32(), b.trackId = e3.readU32(), e3.skip(4), b.duration = e3.readU32(), e3.skip(8), b.layer = e3.readU16(), b.alternateGroup = e3.readU16(), b.volume = e3.readFP8(), e3.skip(2), b.matrix = e3.readU32Array(9), b.width = e3.readFP16(), b.height = e3.readFP16();
                  break;
                case "edts":
                  o2.name = "Edit Atom", a2();
                  break;
                case "elst":
                  var _ = o2;
                  _.name = "Edit List Atom", t2(), _.editList = [], c = e3.readU32();
                  for (var P = 0; P < c; P++) _.editList.push({
                    trackDuration: e3.read32(),
                    mediaTime: e3.read32(),
                    mediaRate: e3.readU32()
                  });
                  n(!r2()), i2();
                  break;
                case "mdia":
                  o2.name = "Media Box", a2();
                  break;
                case "mdhd":
                  var k = o2;
                  k.name = "Media Header Box", t2(), n(0 == k.version), k.creationTime = e3.readU32(), k.modificationTime = e3.readU32(), k.timeScale = e3.readU32(), k.duration = e3.readU32(), k.language = e3.readISO639(), e3.skip(2);
                  break;
                case "hdlr":
                  var T = o2;
                  T.name = "Handler Reference Box", t2(), e3.skip(4), T.handlerType = e3.read4CC(), e3.skip(12), l2 = T.size - 32, l2 > 0 && (T.name = e3.readUTF8(l2));
                  break;
                case "minf":
                  o2.name = "Media Information Box", a2();
                  break;
                case "stbl":
                  o2.name = "Sample Table Box", a2();
                  break;
                case "stsd":
                  var x = o2;
                  x.name = "Sample Description Box", t2(), x.sd = [], e3.readU32(), a2();
                  break;
                case "avc1":
                  var S = o2;
                  e3.reserved(6, 0), S.dataReferenceIndex = e3.readU16(), n(0 == e3.readU16()), n(0 == e3.readU16()), e3.readU32(), e3.readU32(), e3.readU32(), S.width = e3.readU16(), S.height = e3.readU16(), S.horizontalResolution = e3.readFP16(), S.verticalResolution = e3.readFP16(), n(0 == e3.readU32()), S.frameCount = e3.readU16(), S.compressorName = e3.readPString(32), S.depth = e3.readU16(), n(65535 == e3.readU16()), a2();
                  break;
                case "mp4a":
                  var w = o2;
                  if (e3.reserved(6, 0), w.dataReferenceIndex = e3.readU16(), w.version = e3.readU16(), 0 !== w.version) {
                    i2();
                    break;
                  }
                  e3.skip(2), e3.skip(4), w.channelCount = e3.readU16(), w.sampleSize = e3.readU16(), w.compressionId = e3.readU16(), w.packetSize = e3.readU16(), w.sampleRate = e3.readU32() >>> 16, a2();
                  break;
                case "esds":
                  o2.name = "Elementary Stream Descriptor", t2(), i2();
                  break;
                case "avcC":
                  var O = o2;
                  O.name = "AVC Configuration Box", O.configurationVersion = e3.readU8(), O.avcProfileIndicaation = e3.readU8(), O.profileCompatibility = e3.readU8(), O.avcLevelIndication = e3.readU8(), O.lengthSizeMinusOne = 3 & e3.readU8(), n(3 == O.lengthSizeMinusOne, "TODO"), u2 = 31 & e3.readU8(), O.sps = [];
                  for (var C = 0; C < u2; C++) O.sps.push(e3.readU8Array(e3.readU16()));
                  u2 = 31 & e3.readU8(), O.pps = [];
                  for (var F = 0; F < u2; F++) O.pps.push(e3.readU8Array(e3.readU16()));
                  i2();
                  break;
                case "btrt":
                  var R = o2;
                  R.name = "Bit Rate Box", R.bufferSizeDb = e3.readU32(), R.maxBitrate = e3.readU32(), R.avgBitrate = e3.readU32();
                  break;
                case "stts":
                  var L = o2;
                  L.name = "Decoding Time to Sample Box", t2(), L.table = e3.readU32Array(e3.readU32(), 2, ["count", "delta"]);
                  break;
                case "stss":
                  var E = o2;
                  E.name = "Sync Sample Box", t2(), E.samples = e3.readU32Array(e3.readU32());
                  break;
                case "stsc":
                  var A = o2;
                  A.name = "Sample to Chunk Box", t2(), A.table = e3.readU32Array(e3.readU32(), 3, ["firstChunk", "samplesPerChunk", "sampleDescriptionId"]);
                  break;
                case "stsz":
                  var I = o2;
                  I.name = "Sample Size Box", t2(), I.sampleSize = e3.readU32(), u2 = e3.readU32(), 0 == I.sampleSize && (I.table = e3.readU32Array(u2));
                  break;
                case "stco":
                  var D = o2;
                  D.name = "Chunk Offset Box", t2(), D.table = e3.readU32Array(e3.readU32());
                  break;
                case "smhd":
                  var M = o2;
                  M.name = "Sound Media Header Box", t2(), M.balance = e3.readFP8(), e3.reserved(2, 0);
                  break;
                case "mdat":
                  var j = o2;
                  j.name = "Media Data Box", n(j.size >= 8, "Cannot parse large media data yet."), j.data = e3.readU8Array(r2());
                  break;
                case "mebx":
                  o2.name = "Mebx", a2();
                  break;
                case "meta":
                  o2.name = "Metadata", a2();
                  break;
                case "keys":
                  var U = o2;
                  U.name = "Metadata Item Keys", t2();
                  var V = U.keyCount = e3.read32(), N = U.offset - U.size;
                  U.keyList = /* @__PURE__ */ new Map();
                  for (var B = 1; B <= V; B++) {
                    var z = e3.read32() - 8;
                    z < 1 || z > N || (e3.skip(4), U.keyList.set(e3.readUTF8(z), B));
                  }
                  this.metaData.keys = U;
                  break;
                case "ilst":
                  var H = o2;
                  H.name = "Metadata Item List", H.items = [];
                  for (var K = H.offset + H.size; e3.position < K; ) {
                    var W = (e3.position, e3.readU32(), e3.readU32()), q = e3.readU32() - 16, G = (e3.read4CC(), e3.readU8()), X = e3.readU24(), Z = (e3.readU16(), e3.readU16(), void 0);
                    Z = 0 === G && 1 !== X ? e3.uint(q) : e3.readUTF8(q), H.items[W] = Z;
                  }
                  this.metaData.values = H;
                  break;
                default:
                  i2();
              }
              return o2;
            }
          }, {
            key: "read",
            value: function() {
              var e3 = (/* @__PURE__ */ new Date()).getTime();
              this.file = {}, this.readBoxes(this.stream, this.file), o.a.info("Parsed stream in " + ((/* @__PURE__ */ new Date()).getTime() - e3) + " ms");
            }
          }, {
            key: "traceSamples",
            value: function() {
              var e3 = this.tracks[1], t2 = this.tracks[2];
              o.a.info("Video Samples: " + e3.getSampleCount()), o.a.info("Audio Samples: " + t2.getSampleCount());
              for (var r2 = 0, i2 = 0, n2 = 0; n2 < 100; n2++) {
                var a2 = e3.sampleToOffset(r2), s2 = t2.sampleToOffset(i2), u2 = e3.sampleToSize(r2, 1), l2 = t2.sampleToSize(i2, 1);
                a2 < s2 ? (o.a.info("V Sample " + r2 + " Offset : " + a2 + ", Size : " + u2), r2++) : (o.a.info("A Sample " + i2 + " Offset : " + s2 + ", Size : " + l2), i2++);
              }
            }
          }]), e2;
        }(), d = function() {
          function e2(t2, r2) {
            i(this, e2), this.file = t2, this.trak = r2;
          }
          return s(e2, [{
            key: "getSampleSizeTable",
            value: function() {
              return this.trak.mdia.minf.stbl.stsz.table;
            }
          }, {
            key: "getSampleCount",
            value: function() {
              return this.getSampleSizeTable().length;
            }
          }, {
            key: "sampleToSize",
            value: function(e3, t2) {
              for (var r2 = this.getSampleSizeTable(), i2 = 0, n2 = e3; n2 < e3 + t2; n2++) i2 += r2[n2];
              return i2;
            }
          }, {
            key: "sampleToChunk",
            value: function(e3) {
              var t2 = this.trak.mdia.minf.stbl.stsc.table;
              if (1 === t2.length) {
                var r2 = t2[0];
                return n(1 === r2.firstChunk), {
                  index: e3 / r2.samplesPerChunk,
                  offset: e3 % r2.samplesPerChunk
                };
              }
              for (var i2 = 0, a2 = 0; a2 < t2.length; a2++) {
                var o2 = t2[a2];
                if (a2 > 0) {
                  var s2 = t2[a2 - 1], u2 = o2.firstChunk - s2.firstChunk, l2 = s2.samplesPerChunk * u2;
                  if (!(e3 >= l2)) return {
                    index: i2 + Math.floor(e3 / s2.samplesPerChunk),
                    offset: e3 % s2.samplesPerChunk
                  };
                  if (e3 -= l2, a2 === t2.length - 1) return {
                    index: i2 + u2 + Math.floor(e3 / o2.samplesPerChunk),
                    offset: e3 % o2.samplesPerChunk
                  };
                  i2 += u2;
                }
              }
              n(false);
            }
          }, {
            key: "chunkToOffset",
            value: function(e3) {
              return this.trak.mdia.minf.stbl.stco.table[e3];
            }
          }, {
            key: "sampleToOffset",
            value: function(e3) {
              var t2 = this.sampleToChunk(e3);
              return this.chunkToOffset(t2.index) + this.sampleToSize(e3 - t2.offset, t2.offset);
            }
          }, {
            key: "timeToSample",
            value: function(e3) {
              for (var t2 = this.trak.mdia.minf.stbl.stts.table, r2 = 0, i2 = 0; i2 < t2.length; i2++) {
                var n2 = t2[i2].count * t2[i2].delta;
                if (!(e3 >= n2)) return r2 + Math.floor(e3 / t2[i2].delta);
                e3 -= n2, r2 += t2[i2].count;
              }
            }
          }, {
            key: "sampleToTime",
            value: function(e3) {
              for (var t2 = this.trak.mdia.minf.stbl.stts.table, r2 = 0, i2 = 0, n2 = 0; n2 < t2.length && r2 < e3; n2++) {
                var a2 = t2[n2], o2 = Math.min(e3 - r2, a2.count);
                r2 += o2, i2 += o2 * a2.delta;
              }
              return i2;
            }
          }, {
            key: "getTotalTime",
            value: function() {
              for (var e3 = this.trak.mdia.minf.stbl.stts.table, t2 = 0, r2 = 0; r2 < e3.length; r2++) t2 += e3[r2].count * e3[r2].delta;
              return n(this.trak.mdia.mdhd.duration === t2), this.trak.mdia.mdhd.duration;
            }
          }, {
            key: "getTotalTimeInSeconds",
            value: function() {
              return this.timeToSeconds(this.getTotalTime());
            }
          }, {
            key: "getTimeScale",
            value: function() {
              return this.trak.mdia.mdhd.timeScale;
            }
          }, {
            key: "timeToSeconds",
            value: function(e3) {
              return e3 / this.getTimeScale();
            }
          }, {
            key: "secondsToTime",
            value: function(e3) {
              return e3 * this.getTimeScale();
            }
          }, {
            key: "secondsToSample",
            value: function(e3) {
              return this.timeToSample(this.secondsToTime(e3));
            }
          }, {
            key: "sampleToSeconds",
            value: function(e3) {
              return this.timeToSeconds(this.sampleToTime(e3));
            }
          }, {
            key: "getAllSampleTimes",
            value: function() {
              for (var e3 = [], t2 = this.getSampleCount(), r2 = 0; r2 < t2; r2++) e3.push(this.sampleToTime(r2));
              return e3;
            }
          }, {
            key: "getAllSampleSeconds",
            value: function() {
              for (var e3 = [], t2 = this.getSampleCount(), r2 = 0; r2 < t2; r2++) e3.push(this.sampleToSeconds(r2));
              return e3;
            }
          }, {
            key: "getSampleNALUnits",
            value: function(e3) {
              for (var t2 = this.file.stream.bytes, r2 = this.sampleToOffset(e3), i2 = r2 + this.sampleToSize(e3, 1), n2 = []; i2 - r2 > 0; ) {
                var a2 = new u(t2.buffer, r2).readU32();
                n2.push(t2.subarray(r2 + 4, r2 + a2 + 4)), r2 = r2 + a2 + 4;
              }
              return n2;
            }
          }]), e2;
        }();
      }, function(e, t, r) {
        var i = {
          staticMembers: {
            _pool: null,
            _cache: null,
            init: function() {
              this._pool = [], this._cache = {}, this._super();
            },
            getPoolingCacheKey: function() {
              throw "Must implement `getPoolingCacheKey` to use PoolCaching.";
            },
            getCached: function() {
              var e2 = this.getPoolingCacheKey.apply(this, arguments), t2 = this._cache[e2];
              return t2 || (t2 = this._cache[e2] = this._pool.pop() || this.create(), t2._poolingCacheKey = e2, t2.initFromPool.apply(t2, arguments)), t2;
            },
            peekCached: function() {
              var e2 = this.getPoolingCacheKey.apply(this, arguments);
              return this._cache[e2] || null;
            },
            _disposeInstance: function(e2) {
              delete this._cache[e2._poolingCacheKey], e2._poolingCacheKey = void 0, e2._poolingLifecycleCount = 1 + (0 | e2._poolingLifecycleCount), this._pool.push(e2);
            }
          },
          dispose: function() {
          },
          _poolingCacheKey: null,
          initFromPool: function() {
          },
          _retainCount: 0,
          retain: function() {
            return this._retainCount++, this;
          },
          release: function() {
            return this._retainCount--, this._retainCount || this.dispose(), this;
          }
        };
        t.a = i;
      }, function(e, t, r) {
        function i(e2, t2) {
          if (!e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t2 || "object" != typeof t2 && "function" != typeof t2 ? e2 : t2;
        }
        function n(e2, t2) {
          if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function, not " + typeof t2);
          e2.prototype = Object.create(t2 && t2.prototype, {
            constructor: {
              value: e2,
              enumerable: false,
              writable: true,
              configurable: true
            }
          }), t2 && (Object.setPrototypeOf ? Object.setPrototypeOf(e2, t2) : e2.__proto__ = t2);
        }
        function a(e2, t2) {
          if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        }
        var o = r(19);
        r.d(t, "a", function() {
          return d;
        }), r.d(t, "b", function() {
          return h;
        }), r.d(t, "c", function() {
          return f;
        }), r.d(t, "d", function() {
          return y;
        });
        var s = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var r2 = 0; r2 < t2.length; r2++) {
              var i2 = t2[r2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
            }
          }
          return function(t2, r2, i2) {
            return r2 && e2(t2.prototype, r2), i2 && e2(t2, i2), t2;
          };
        }(), u = function() {
          function e2() {
            a(this, e2), this._a = [];
          }
          return s(e2, [{
            key: "get",
            value: function() {
              return this._a.pop() || this.create();
            }
          }, {
            key: "ret",
            value: function(e3) {
              this.prepare(e3), this._a.push(e3);
            }
          }]), e2;
        }(), l = function(e2) {
          function t2() {
            return a(this, t2), i(this, (t2.__proto__ || Object.getPrototypeOf(t2)).apply(this, arguments));
          }
          return n(t2, e2), s(t2, [{
            key: "create",
            value: function() {
              return [];
            }
          }, {
            key: "prepare",
            value: function(e3) {
              e3.length = 0;
            }
          }]), t2;
        }(u), d = new l(), c = function(e2) {
          function t2() {
            return a(this, t2), i(this, (t2.__proto__ || Object.getPrototypeOf(t2)).apply(this, arguments));
          }
          return n(t2, e2), s(t2, [{
            key: "create",
            value: function() {
              return new o.a();
            }
          }, {
            key: "prepare",
            value: function(e3) {
              e3.clear();
            }
          }]), t2;
        }(u), h = new c(), p = function(e2) {
          function t2() {
            return a(this, t2), i(this, (t2.__proto__ || Object.getPrototypeOf(t2)).apply(this, arguments));
          }
          return n(t2, e2), s(t2, [{
            key: "create",
            value: function() {
              return /* @__PURE__ */ Object.create(null);
            }
          }, {
            key: "prepare",
            value: function(e3) {
              var t3 = e3;
              for (var r2 in t3) delete t3[r2];
            }
          }]), t2;
        }(u), f = new p(), v = function(e2) {
          function t2() {
            return a(this, t2), i(this, (t2.__proto__ || Object.getPrototypeOf(t2)).apply(this, arguments));
          }
          return n(t2, e2), s(t2, [{
            key: "create",
            value: function() {
              return document.createElement("canvas");
            }
          }, {
            key: "prepare",
            value: function(e3) {
              var t3 = e3.parentNode;
              t3 && t3.removeChild(e3), e3.width = e3.height = 0;
            }
          }]), t2;
        }(u), y = new v();
      }, function(e, t, r) {
        function i(e2, t2) {
          return e2.apply(void 0, t2);
        }
        var n = {
          _readiness: "pending",
          _resolutionArgs: null,
          _fulfillmentCallbacks: null,
          _rejectionCallbacks: null,
          onReadyOrFail: function(e2, t2) {
            this._resolveIfAlreadyResolved(e2, t2, false) || this._pendCallbacks(e2, t2);
          },
          onReadyOrFailSync: function(e2, t2) {
            this._resolveIfAlreadyResolved(e2, t2, true) || this._pendCallbacks(e2, t2);
          },
          _resolveIfAlreadyResolved: function(e2, t2, r2) {
            var n2 = this._resolutionArgs;
            return "success" === this._readiness && e2 ? (r2 ? i(e2, n2) : setTimeout(i, 0, e2, n2), true) : !("failure" !== this._readiness || !t2) && (r2 ? i(t2, n2) : setTimeout(i, 0, t2, n2), true);
          },
          _pendCallbacks: function(e2, t2) {
            e2 && (this._fulfillmentCallbacks || (this._fulfillmentCallbacks = [])).push(e2), t2 && (this._rejectionCallbacks || (this._rejectionCallbacks = [])).push(t2);
          },
          clearReadinessCallbacks: function() {
            this._fulfillmentCallbacks && (this._fulfillmentCallbacks.length = 0), this._rejectionCallbacks && (this._rejectionCallbacks.length = 0);
          },
          resetReadiness: function() {
            this._readiness = "pending", this._resolutionArgs && (this._resolutionArgs.length = 0), this.clearReadinessCallbacks();
          },
          resolveReadiness: function() {
            "pending" === this._readiness && (this._readiness = "success", (this._resolutionArgs = this._resolutionArgs || []).push.apply(this._resolutionArgs, arguments), this._invokeCallbacks(this._fulfillmentCallbacks), this.clearReadinessCallbacks());
          },
          rejectReadiness: function() {
            "pending" === this._readiness && (this._readiness = "failure", (this._resolutionArgs = this._resolutionArgs || []).push.apply(this._resolutionArgs, arguments), this._invokeCallbacks(this._rejectionCallbacks), this.clearReadinessCallbacks());
          },
          _invokeCallbacks: function(e2) {
            if (e2) {
              for (var t2, r2 = 0; t2 = e2[r2]; r2++) t2.apply(void 0, this._resolutionArgs);
              e2.length = 0;
            }
          }
        };
        t.a = n;
      }, function(e, t, r) {
        function i() {
          for (var e2 = 1; e2 < arguments.length; e2++) this[e2 - 1] = arguments[e2];
          return this;
        }
        function n(e2) {
          return e2 && "IMG" === e2.tagName && /^data:image\/svg|\.svg\?|\.svg$/.test(e2.src);
        }
        var a = document.createElement("canvas"), o = a.getContext("2d"), s = document.createElement("canvas"), u = s.getContext("2d");
        a.width = s.width = a.height = s.height = 0;
        var l = false, d = false, c = function(e2, t2) {
          for (var r2 = arguments.length, c2 = Array(r2 > 2 ? r2 - 2 : 0), p = 2; p < r2; p++) c2[p - 2] = arguments[p];
          if (n(t2)) return e2.drawImage.apply(e2, i.apply(h, arguments)), true;
          var f = l, v = d;
          l = d = false;
          var y = t2 instanceof HTMLImageElement ? t2.naturalWidth : t2.width, m = t2 instanceof HTMLImageElement ? t2.naturalHeight : t2.height;
          if (!y || !m) throw "Source image provided to drawImageSmooth was not loaded, or otherwise had no dimensions.";
          var g = void 0, b = void 0, _ = void 0, P = void 0, k = void 0, T = void 0, x = void 0, S = void 0;
          switch (arguments.length - 1) {
            case 3:
              g = 0, b = 0, _ = y, P = m, k = arguments[2], T = arguments[3], x = y, S = m;
              break;
            case 5:
              g = 0, b = 0, _ = y, P = m, k = arguments[2], T = arguments[3], x = arguments[4], S = arguments[5];
              break;
            case 9:
              g = arguments[2], b = arguments[3], _ = arguments[4], P = arguments[5], k = arguments[6], T = arguments[7], x = arguments[8], S = arguments[9];
          }
          var w = x / _, O = S / P;
          if (w && O) {
            var C = Math.max(w, O), F = Math.pow(2, Math.ceil(Math.log(1.1 * C) / Math.log(2)));
            if (F >= 1) return e2.drawImage.apply(e2, i.apply(h, arguments)), true;
            var R = void 0;
            if (f) {
              R = "_cachedSmoothDownsample_from" + g + "," + b + "," + _ + "," + P + "@" + F + "x";
              var L = t2[R];
              if (L) return e2.drawImage(L, 0, 0, L.width, L.height, k, T, x, S), true;
            }
            if (v) return e2.drawImage.apply(e2, i.apply(h, arguments)), false;
            var E = 1, A = _, I = P, D = Math.max(Math.pow(2, Math.ceil(Math.log(A) / Math.log(2))), a.width), M = Math.max(Math.pow(2, Math.ceil(Math.log(I) / Math.log(2))), a.height);
            for (a.width === D && a.height === M || (a.width = s.width = D, a.height = s.height = M), o.drawImage(t2, g, b, _, P, 0, 0, _, P); E > F; ) {
              u.drawImage(a, 0, 0, A, I, 0, 0, A = Math.ceil(A / 2), I = Math.ceil(I / 2)), o.clearRect(0, 0, A, I);
              var j = a;
              a = s, s = j;
              var U = o;
              o = u, u = U, E /= 2;
            }
            if (f) {
              var V = document.createElement("canvas");
              V.width = A, V.height = I, V.getContext("2d").drawImage(a, 0, 0), t2[R] = V;
            }
            return e2.drawImage(a, 0, 0, A, I, k, T, x, S), o.clearRect(0, 0, _, P), u.clearRect(0, 0, _, P), true;
          }
        };
        c.usingCache = function() {
          return l = true, this;
        }, c.avoidingWorkIf = function(e2) {
          return d = e2, this;
        };
        var h = [];
        t.a = c;
      }, function(e, t, r) {
        function i() {
          var e2 = "_callbacksForEventHandler" + ++n;
          return function(t2) {
            var r2 = this[e2] || (this[e2] = []);
            if ("function" == typeof t2) return r2.push(t2);
            if (r2) for (var i2 = 0, n2 = r2.length; i2 < n2; ++i2) r2[i2](t2);
          };
        }
        t.a = i;
        var n = 1;
      }, function(e, t, r) {
        function i(e2) {
          var t2 = e2 && new DataView(e2), r2 = {};
          return t2 && n(t2) && a(t2, r2), r2;
        }
        function n(e2) {
          return 65496 === e2.getUint16(0);
        }
        function a(e2, t2) {
          for (var r2 = e2.byteLength, i2 = 2; i2 < r2; ) {
            var n2 = e2.getUint16(i2);
            65505 === n2 && o(e2, i2 + 4, t2), 65472 !== n2 && 65474 !== n2 || s(e2, i2 + 5, t2), i2 += 2 + e2.getUint16(i2 + 2);
          }
          return t2;
        }
        function o(e2, t2, r2) {
          if (1165519206 !== e2.getUint32(t2)) return r2;
          var i2 = t2 + 6, n2 = void 0, a2 = e2.getUint16(i2);
          if (18761 === a2) n2 = true;
          else {
            if (19789 !== a2) return r2;
            n2 = false;
          }
          for (var o2 = i2 + e2.getUint32(i2 + 4, n2), s2 = e2.getUint16(o2, n2), l2 = 0; l2 < s2; l2++) {
            var d2 = o2 + 12 * l2 + 2, h = e2.getUint16(d2, n2);
            if (274 === h && (r2.orientation = e2.getUint16(d2 + 8, n2)), 34665 === h) {
              u(e2, i2, c(e2, d2, n2), n2, r2);
            }
          }
          return r2;
        }
        function s(e2, t2, r2) {
          return r2.height = e2.getUint16(t2), r2.width = e2.getUint16(t2 + 2), r2;
        }
        function u(e2, t2, r2, i2, n2) {
          var a2 = d(e2, t2 + r2, i2), o2 = void 0;
          if (37500 in a2) {
            o2 = a2[37500];
            l(e2, t2 + e2.getUint32(o2 + 8), n2);
          }
          return n2;
        }
        function l(e2, t2, r2) {
          for (var i2 = "", n2 = 0; n2 < 9; n2++) i2 += String.fromCharCode(e2.getUint8(t2 + n2));
          if ("Apple iOS" !== i2) return r2;
          var a2 = 18761 === e2.getUint16(t2 + 9 + 3), o2 = d(e2, t2 + 9 + 3 + 2, a2);
          return 27 in o2 && (r2.photosRenderEffect = c(e2, o2[27], a2)), r2;
        }
        function d(e2, t2, r2) {
          for (var i2 = e2.getUint16(t2, r2), n2 = t2 + 2, a2 = {}, o2 = 0; o2 < i2; o2++) {
            var s2 = n2 + 12 * o2;
            a2[e2.getUint16(s2, r2)] = s2;
          }
          return a2;
        }
        function c(e2, t2, r2) {
          var i2 = e2.getUint16(t2 + 2, r2), n2 = e2.getUint32(t2 + 4, r2), a2 = e2.getUint32(t2 + 8, r2), o2 = [];
          switch (i2) {
            case 3:
              if (1 === n2) return e2.getUint16(t2 + 8, r2);
              if (2 === n2) return [e2.getUint16(t2 + 8, r2), e2.getUint16(t2 + 10, r2)];
              for (var s2 = 0; s2 < n2; s2++) o2[s2] = e2.getUint16(a2 + 4 * s2, r2);
              return o2;
            case 4:
              if (1 === n2) return a2;
              for (var u2 = 0; u2 < n2; u2++) o2[u2] = e2.getUint32(a2 + 4 * u2, r2);
              return o2;
            case 9:
              if (1 === n2) return e2.getInt32(t2 + 8, r2);
              for (var l2 = 0; l2 < n2; l2++) o2[l2] = e2.getInt32(a2 + 4 * l2, r2);
              return o2;
            default:
              return null;
          }
        }
        t.a = i;
      }, function(e, t, r) {
        function i() {
          for (var e2 = n() + n(); e2.length < 16; ) e2 += n();
          return e2.slice(0, 16);
        }
        function n() {
          return Math.random().toString(16).substring(2);
        }
        t.a = i;
      }, function(e, t, r) {
        function i(e2, t2) {
          var r2 = e2, i2 = r2._computedStyle;
          i2 || (i2 = r2._computedStyle = document.defaultView.getComputedStyle(e2, null));
          var a2 = i2.getPropertyValue(t2);
          return !a2 && n.get(t2) && (a2 = n.get(t2)(i2) || a2), a2;
        }
        t.a = i;
        var n = function() {
          var e2 = /* @__PURE__ */ new Map();
          return e2.set("font", function(e3) {
            for (var t2 = "", r2 = 0, i2 = a.length; r2 < i2; r2++) {
              var n2 = a[r2], o = e3.getPropertyValue("font-" + n2);
              if (o && (t2 && (t2 += " "), t2 += o, "size" === n2)) {
                var s = e3.getPropertyValue("line-height");
                s && (t2 += "/" + s);
              }
            }
            return t2;
          }), e2;
        }(), a = ["style", "variant", "weight", "size", "family"];
      }, function(e, t, r) {
        function i(e2, t2, r2, i2, n2, a, o) {
          var s = void 0;
          s = false;
          var l = arguments.length;
          6 !== l && (o = l - 1);
          var d = void 0, c = void 0, h = void 0, p = void 0, f = void 0;
          if (2 === o || 3 === o) {
            var v = t2, y = r2;
            c = v.height, d = v.width, p = y.height, h = y.width, f = i2;
          } else d = t2, c = r2, h = i2, p = n2, f = a;
          var m = d / c, g = h / p, b = s ? m < g : m > g;
          return f = f || {}, f.width = b ? h : p * m, f.height = b ? h / m : p, f;
        }
        function n(e2, t2, r2, n2, a) {
          return i(false, e2, t2, r2, n2, a, arguments.length);
        }
        t.a = n;
      }, function(e, t, r) {
        t.a = "current";
      }, function(e, t, r) {
        t.a = "Mcurrent";
      }, function(e, t, r) {
        t.a = "1.5.6";
      }]);
    });
  })(livephotoskit$1);
  return livephotoskit$1.exports;
}
var livephotoskitExports = requireLivephotoskit();
const img = "/awei/assets/img-CX0DLBWh.jpg";
const vodeo = "/awei/assets/vodeo-BvwEXTdT.mov";
function HomeLayout() {
  const ref = reactExports.useRef(null);
  const init = () => {
    const player = livephotoskitExports.Player(ref.current);
    player.photoSrc = img;
    player.videoSrc = vodeo;
    player.addEventListener("canplay", (evt) => console.log("player ready", evt));
    player.addEventListener("error", (evt) => console.log("player load error", evt));
    player.addEventListener("ended", (evt) => console.log("player finished playing through", evt));
    player.playbackStyle = livephotoskitExports.PlaybackStyle.default;
    player.playbackStyle = livephotoskitExports.PlaybackStyle.FULL;
    player.play();
    player.pause();
    player.toggle();
    player.stop();
    player.currentTime = 0.25 * player.duration;
    player.currentTime = 0.1;
  };
  reactExports.useEffect(() => {
    if (ref.current) {
      init();
    }
  }, [ref.current]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      ref,
      style: {
        width: "400px",
        height: "400px"
      }
    })
  });
}
export {
  HomeLayout as default
};
