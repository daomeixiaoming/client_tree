/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("../3rd/protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.client = (function () {

    /**
     * Namespace client.
     * @exports client
     * @namespace
     */
    var client = {};

    client.money = (function () {

        /**
         * Namespace money.
         * @memberof client
         * @namespace
         */
        var money = {};

        money.tree = (function () {

            /**
             * Namespace tree.
             * @memberof client.money
             * @namespace
             */
            var tree = {};

            /**
             * RequestCode enum.
             * @name client.money.tree.RequestCode
             * @enum {number}
             * @property {number} INVALID_REQUEST=0 INVALID_REQUEST value
             * @property {number} PING=1 PING value
             */
            tree.RequestCode = (function () {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "INVALID_REQUEST"] = 0;
                values[valuesById[1] = "PING"] = 1;
                return values;
            })();

            /**
             * ResponseCode enum.
             * @name client.money.tree.ResponseCode
             * @enum {number}
             * @property {number} INVALID_RESPONSE=0 INVALID_RESPONSE value
             * @property {number} PONG=1 PONG value
             * @property {number} ERROR=2 ERROR value
             * @property {number} MONEY_TREE_REWARD=100 MONEY_TREE_REWARD value
             */
            tree.ResponseCode = (function () {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "INVALID_RESPONSE"] = 0;
                values[valuesById[1] = "PONG"] = 1;
                values[valuesById[2] = "ERROR"] = 2;
                values[valuesById[100] = "MONEY_TREE_REWARD"] = 100;
                return values;
            })();

            tree.Request = (function () {

                /**
                 * Properties of a Request.
                 * @memberof client.money.tree
                 * @interface IRequest
                 * @property {client.money.tree.RequestCode|null} [cmd] Request cmd
                 * @property {client.money.tree.IRequestBody|null} [body] Request body
                 */

                /**
                 * Constructs a new Request.
                 * @memberof client.money.tree
                 * @classdesc Represents a Request.
                 * @implements IRequest
                 * @constructor
                 * @param {client.money.tree.IRequest=} [properties] Properties to set
                 */
                function Request(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Request cmd.
                 * @member {client.money.tree.RequestCode} cmd
                 * @memberof client.money.tree.Request
                 * @instance
                 */
                Request.prototype.cmd = 0;

                /**
                 * Request body.
                 * @member {client.money.tree.IRequestBody|null|undefined} body
                 * @memberof client.money.tree.Request
                 * @instance
                 */
                Request.prototype.body = null;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @function create
                 * @memberof client.money.tree.Request
                 * @static
                 * @param {client.money.tree.IRequest=} [properties] Properties to set
                 * @returns {client.money.tree.Request} Request instance
                 */
                Request.create = function create(properties) {
                    return new Request(properties);
                };

                /**
                 * Encodes the specified Request message. Does not implicitly {@link client.money.tree.Request.verify|verify} messages.
                 * @function encode
                 * @memberof client.money.tree.Request
                 * @static
                 * @param {client.money.tree.IRequest} message Request message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Request.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
                    if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                        $root.client.money.tree.RequestBody.encode(message.body, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link client.money.tree.Request.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof client.money.tree.Request
                 * @static
                 * @param {client.money.tree.IRequest} message Request message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Request.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @function decode
                 * @memberof client.money.tree.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {client.money.tree.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client.money.tree.Request();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.cmd = reader.int32();
                                break;
                            case 2:
                                message.body = $root.client.money.tree.RequestBody.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof client.money.tree.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {client.money.tree.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Request message.
                 * @function verify
                 * @memberof client.money.tree.Request
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Request.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.cmd != null && message.hasOwnProperty("cmd"))
                        switch (message.cmd) {
                            default:
                                return "cmd: enum value expected";
                            case 0:
                            case 1:
                                break;
                        }
                    if (message.body != null && message.hasOwnProperty("body")) {
                        var error = $root.client.money.tree.RequestBody.verify(message.body);
                        if (error)
                            return "body." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof client.money.tree.Request
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {client.money.tree.Request} Request
                 */
                Request.fromObject = function fromObject(object) {
                    if (object instanceof $root.client.money.tree.Request)
                        return object;
                    var message = new $root.client.money.tree.Request();
                    switch (object.cmd) {
                        case "INVALID_REQUEST":
                        case 0:
                            message.cmd = 0;
                            break;
                        case "PING":
                        case 1:
                            message.cmd = 1;
                            break;
                    }
                    if (object.body != null) {
                        if (typeof object.body !== "object")
                            throw TypeError(".client.money.tree.Request.body: object expected");
                        message.body = $root.client.money.tree.RequestBody.fromObject(object.body);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof client.money.tree.Request
                 * @static
                 * @param {client.money.tree.Request} message Request
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Request.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.cmd = options.enums === String ? "INVALID_REQUEST" : 0;
                        object.body = null;
                    }
                    if (message.cmd != null && message.hasOwnProperty("cmd"))
                        object.cmd = options.enums === String ? $root.client.money.tree.RequestCode[message.cmd] : message.cmd;
                    if (message.body != null && message.hasOwnProperty("body"))
                        object.body = $root.client.money.tree.RequestBody.toObject(message.body, options);
                    return object;
                };

                /**
                 * Converts this Request to JSON.
                 * @function toJSON
                 * @memberof client.money.tree.Request
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Request.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Request;
            })();

            tree.RequestBody = (function () {

                /**
                 * Properties of a RequestBody.
                 * @memberof client.money.tree
                 * @interface IRequestBody
                 * @property {common.IEmpty|null} [empty] RequestBody empty
                 */

                /**
                 * Constructs a new RequestBody.
                 * @memberof client.money.tree
                 * @classdesc Represents a RequestBody.
                 * @implements IRequestBody
                 * @constructor
                 * @param {client.money.tree.IRequestBody=} [properties] Properties to set
                 */
                function RequestBody(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RequestBody empty.
                 * @member {common.IEmpty|null|undefined} empty
                 * @memberof client.money.tree.RequestBody
                 * @instance
                 */
                RequestBody.prototype.empty = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * RequestBody body.
                 * @member {"empty"|undefined} body
                 * @memberof client.money.tree.RequestBody
                 * @instance
                 */
                Object.defineProperty(RequestBody.prototype, "body", {
                    get: $util.oneOfGetter($oneOfFields = ["empty"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new RequestBody instance using the specified properties.
                 * @function create
                 * @memberof client.money.tree.RequestBody
                 * @static
                 * @param {client.money.tree.IRequestBody=} [properties] Properties to set
                 * @returns {client.money.tree.RequestBody} RequestBody instance
                 */
                RequestBody.create = function create(properties) {
                    return new RequestBody(properties);
                };

                /**
                 * Encodes the specified RequestBody message. Does not implicitly {@link client.money.tree.RequestBody.verify|verify} messages.
                 * @function encode
                 * @memberof client.money.tree.RequestBody
                 * @static
                 * @param {client.money.tree.IRequestBody} message RequestBody message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RequestBody.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.empty != null && Object.hasOwnProperty.call(message, "empty"))
                        $root.common.Empty.encode(message.empty, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified RequestBody message, length delimited. Does not implicitly {@link client.money.tree.RequestBody.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof client.money.tree.RequestBody
                 * @static
                 * @param {client.money.tree.IRequestBody} message RequestBody message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RequestBody.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RequestBody message from the specified reader or buffer.
                 * @function decode
                 * @memberof client.money.tree.RequestBody
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {client.money.tree.RequestBody} RequestBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RequestBody.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client.money.tree.RequestBody();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.empty = $root.common.Empty.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RequestBody message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof client.money.tree.RequestBody
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {client.money.tree.RequestBody} RequestBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RequestBody.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RequestBody message.
                 * @function verify
                 * @memberof client.money.tree.RequestBody
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RequestBody.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.empty != null && message.hasOwnProperty("empty")) {
                        properties.body = 1;
                        {
                            var error = $root.common.Empty.verify(message.empty);
                            if (error)
                                return "empty." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a RequestBody message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof client.money.tree.RequestBody
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {client.money.tree.RequestBody} RequestBody
                 */
                RequestBody.fromObject = function fromObject(object) {
                    if (object instanceof $root.client.money.tree.RequestBody)
                        return object;
                    var message = new $root.client.money.tree.RequestBody();
                    if (object.empty != null) {
                        if (typeof object.empty !== "object")
                            throw TypeError(".client.money.tree.RequestBody.empty: object expected");
                        message.empty = $root.common.Empty.fromObject(object.empty);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a RequestBody message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof client.money.tree.RequestBody
                 * @static
                 * @param {client.money.tree.RequestBody} message RequestBody
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RequestBody.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.empty != null && message.hasOwnProperty("empty")) {
                        object.empty = $root.common.Empty.toObject(message.empty, options);
                        if (options.oneofs)
                            object.body = "empty";
                    }
                    return object;
                };

                /**
                 * Converts this RequestBody to JSON.
                 * @function toJSON
                 * @memberof client.money.tree.RequestBody
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RequestBody.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return RequestBody;
            })();

            tree.Response = (function () {

                /**
                 * Properties of a Response.
                 * @memberof client.money.tree
                 * @interface IResponse
                 * @property {client.money.tree.ResponseCode|null} [cmd] Response cmd
                 * @property {client.money.tree.IResponseBody|null} [body] Response body
                 */

                /**
                 * Constructs a new Response.
                 * @memberof client.money.tree
                 * @classdesc Represents a Response.
                 * @implements IResponse
                 * @constructor
                 * @param {client.money.tree.IResponse=} [properties] Properties to set
                 */
                function Response(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Response cmd.
                 * @member {client.money.tree.ResponseCode} cmd
                 * @memberof client.money.tree.Response
                 * @instance
                 */
                Response.prototype.cmd = 0;

                /**
                 * Response body.
                 * @member {client.money.tree.IResponseBody|null|undefined} body
                 * @memberof client.money.tree.Response
                 * @instance
                 */
                Response.prototype.body = null;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @function create
                 * @memberof client.money.tree.Response
                 * @static
                 * @param {client.money.tree.IResponse=} [properties] Properties to set
                 * @returns {client.money.tree.Response} Response instance
                 */
                Response.create = function create(properties) {
                    return new Response(properties);
                };

                /**
                 * Encodes the specified Response message. Does not implicitly {@link client.money.tree.Response.verify|verify} messages.
                 * @function encode
                 * @memberof client.money.tree.Response
                 * @static
                 * @param {client.money.tree.IResponse} message Response message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Response.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
                    if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                        $root.client.money.tree.ResponseBody.encode(message.body, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link client.money.tree.Response.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof client.money.tree.Response
                 * @static
                 * @param {client.money.tree.IResponse} message Response message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Response.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @function decode
                 * @memberof client.money.tree.Response
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {client.money.tree.Response} Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Response.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client.money.tree.Response();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.cmd = reader.int32();
                                break;
                            case 2:
                                message.body = $root.client.money.tree.ResponseBody.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof client.money.tree.Response
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {client.money.tree.Response} Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Response.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Response message.
                 * @function verify
                 * @memberof client.money.tree.Response
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Response.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.cmd != null && message.hasOwnProperty("cmd"))
                        switch (message.cmd) {
                            default:
                                return "cmd: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 100:
                                break;
                        }
                    if (message.body != null && message.hasOwnProperty("body")) {
                        var error = $root.client.money.tree.ResponseBody.verify(message.body);
                        if (error)
                            return "body." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Response message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof client.money.tree.Response
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {client.money.tree.Response} Response
                 */
                Response.fromObject = function fromObject(object) {
                    if (object instanceof $root.client.money.tree.Response)
                        return object;
                    var message = new $root.client.money.tree.Response();
                    switch (object.cmd) {
                        case "INVALID_RESPONSE":
                        case 0:
                            message.cmd = 0;
                            break;
                        case "PONG":
                        case 1:
                            message.cmd = 1;
                            break;
                        case "ERROR":
                        case 2:
                            message.cmd = 2;
                            break;
                        case "MONEY_TREE_REWARD":
                        case 100:
                            message.cmd = 100;
                            break;
                    }
                    if (object.body != null) {
                        if (typeof object.body !== "object")
                            throw TypeError(".client.money.tree.Response.body: object expected");
                        message.body = $root.client.money.tree.ResponseBody.fromObject(object.body);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof client.money.tree.Response
                 * @static
                 * @param {client.money.tree.Response} message Response
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Response.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.cmd = options.enums === String ? "INVALID_RESPONSE" : 0;
                        object.body = null;
                    }
                    if (message.cmd != null && message.hasOwnProperty("cmd"))
                        object.cmd = options.enums === String ? $root.client.money.tree.ResponseCode[message.cmd] : message.cmd;
                    if (message.body != null && message.hasOwnProperty("body"))
                        object.body = $root.client.money.tree.ResponseBody.toObject(message.body, options);
                    return object;
                };

                /**
                 * Converts this Response to JSON.
                 * @function toJSON
                 * @memberof client.money.tree.Response
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Response.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Response;
            })();

            tree.ResponseBody = (function () {

                /**
                 * Properties of a ResponseBody.
                 * @memberof client.money.tree
                 * @interface IResponseBody
                 * @property {common.IErrorMessage|null} [error] ResponseBody error
                 * @property {client.money.tree.IRewardInfo|null} [rewardInfo] ResponseBody rewardInfo
                 */

                /**
                 * Constructs a new ResponseBody.
                 * @memberof client.money.tree
                 * @classdesc Represents a ResponseBody.
                 * @implements IResponseBody
                 * @constructor
                 * @param {client.money.tree.IResponseBody=} [properties] Properties to set
                 */
                function ResponseBody(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResponseBody error.
                 * @member {common.IErrorMessage|null|undefined} error
                 * @memberof client.money.tree.ResponseBody
                 * @instance
                 */
                ResponseBody.prototype.error = null;

                /**
                 * ResponseBody rewardInfo.
                 * @member {client.money.tree.IRewardInfo|null|undefined} rewardInfo
                 * @memberof client.money.tree.ResponseBody
                 * @instance
                 */
                ResponseBody.prototype.rewardInfo = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * ResponseBody body.
                 * @member {"error"|"rewardInfo"|undefined} body
                 * @memberof client.money.tree.ResponseBody
                 * @instance
                 */
                Object.defineProperty(ResponseBody.prototype, "body", {
                    get: $util.oneOfGetter($oneOfFields = ["error", "rewardInfo"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ResponseBody instance using the specified properties.
                 * @function create
                 * @memberof client.money.tree.ResponseBody
                 * @static
                 * @param {client.money.tree.IResponseBody=} [properties] Properties to set
                 * @returns {client.money.tree.ResponseBody} ResponseBody instance
                 */
                ResponseBody.create = function create(properties) {
                    return new ResponseBody(properties);
                };

                /**
                 * Encodes the specified ResponseBody message. Does not implicitly {@link client.money.tree.ResponseBody.verify|verify} messages.
                 * @function encode
                 * @memberof client.money.tree.ResponseBody
                 * @static
                 * @param {client.money.tree.IResponseBody} message ResponseBody message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResponseBody.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                        $root.common.ErrorMessage.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.rewardInfo != null && Object.hasOwnProperty.call(message, "rewardInfo"))
                        $root.client.money.tree.RewardInfo.encode(message.rewardInfo, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ResponseBody message, length delimited. Does not implicitly {@link client.money.tree.ResponseBody.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof client.money.tree.ResponseBody
                 * @static
                 * @param {client.money.tree.IResponseBody} message ResponseBody message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResponseBody.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResponseBody message from the specified reader or buffer.
                 * @function decode
                 * @memberof client.money.tree.ResponseBody
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {client.money.tree.ResponseBody} ResponseBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResponseBody.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client.money.tree.ResponseBody();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.error = $root.common.ErrorMessage.decode(reader, reader.uint32());
                                break;
                            case 100:
                                message.rewardInfo = $root.client.money.tree.RewardInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ResponseBody message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof client.money.tree.ResponseBody
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {client.money.tree.ResponseBody} ResponseBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResponseBody.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResponseBody message.
                 * @function verify
                 * @memberof client.money.tree.ResponseBody
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResponseBody.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.error != null && message.hasOwnProperty("error")) {
                        properties.body = 1;
                        {
                            var error = $root.common.ErrorMessage.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                    }
                    if (message.rewardInfo != null && message.hasOwnProperty("rewardInfo")) {
                        if (properties.body === 1)
                            return "body: multiple values";
                        properties.body = 1;
                        {
                            var error = $root.client.money.tree.RewardInfo.verify(message.rewardInfo);
                            if (error)
                                return "rewardInfo." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ResponseBody message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof client.money.tree.ResponseBody
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {client.money.tree.ResponseBody} ResponseBody
                 */
                ResponseBody.fromObject = function fromObject(object) {
                    if (object instanceof $root.client.money.tree.ResponseBody)
                        return object;
                    var message = new $root.client.money.tree.ResponseBody();
                    if (object.error != null) {
                        if (typeof object.error !== "object")
                            throw TypeError(".client.money.tree.ResponseBody.error: object expected");
                        message.error = $root.common.ErrorMessage.fromObject(object.error);
                    }
                    if (object.rewardInfo != null) {
                        if (typeof object.rewardInfo !== "object")
                            throw TypeError(".client.money.tree.ResponseBody.rewardInfo: object expected");
                        message.rewardInfo = $root.client.money.tree.RewardInfo.fromObject(object.rewardInfo);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ResponseBody message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof client.money.tree.ResponseBody
                 * @static
                 * @param {client.money.tree.ResponseBody} message ResponseBody
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResponseBody.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.error != null && message.hasOwnProperty("error")) {
                        object.error = $root.common.ErrorMessage.toObject(message.error, options);
                        if (options.oneofs)
                            object.body = "error";
                    }
                    if (message.rewardInfo != null && message.hasOwnProperty("rewardInfo")) {
                        object.rewardInfo = $root.client.money.tree.RewardInfo.toObject(message.rewardInfo, options);
                        if (options.oneofs)
                            object.body = "rewardInfo";
                    }
                    return object;
                };

                /**
                 * Converts this ResponseBody to JSON.
                 * @function toJSON
                 * @memberof client.money.tree.ResponseBody
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResponseBody.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ResponseBody;
            })();

            tree.RewardInfo = (function () {

                /**
                 * Properties of a RewardInfo.
                 * @memberof client.money.tree
                 * @interface IRewardInfo
                 * @property {string|null} [nickname] RewardInfo nickname
                 * @property {Array.<client.money.tree.IGiftInfo>|null} [reward] RewardInfo reward
                 */

                /**
                 * Constructs a new RewardInfo.
                 * @memberof client.money.tree
                 * @classdesc Represents a RewardInfo.
                 * @implements IRewardInfo
                 * @constructor
                 * @param {client.money.tree.IRewardInfo=} [properties] Properties to set
                 */
                function RewardInfo(properties) {
                    this.reward = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RewardInfo nickname.
                 * @member {string} nickname
                 * @memberof client.money.tree.RewardInfo
                 * @instance
                 */
                RewardInfo.prototype.nickname = "";

                /**
                 * RewardInfo reward.
                 * @member {Array.<client.money.tree.IGiftInfo>} reward
                 * @memberof client.money.tree.RewardInfo
                 * @instance
                 */
                RewardInfo.prototype.reward = $util.emptyArray;

                /**
                 * Creates a new RewardInfo instance using the specified properties.
                 * @function create
                 * @memberof client.money.tree.RewardInfo
                 * @static
                 * @param {client.money.tree.IRewardInfo=} [properties] Properties to set
                 * @returns {client.money.tree.RewardInfo} RewardInfo instance
                 */
                RewardInfo.create = function create(properties) {
                    return new RewardInfo(properties);
                };

                /**
                 * Encodes the specified RewardInfo message. Does not implicitly {@link client.money.tree.RewardInfo.verify|verify} messages.
                 * @function encode
                 * @memberof client.money.tree.RewardInfo
                 * @static
                 * @param {client.money.tree.IRewardInfo} message RewardInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RewardInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
                    if (message.reward != null && message.reward.length)
                        for (var i = 0; i < message.reward.length; ++i)
                            $root.client.money.tree.GiftInfo.encode(message.reward[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified RewardInfo message, length delimited. Does not implicitly {@link client.money.tree.RewardInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof client.money.tree.RewardInfo
                 * @static
                 * @param {client.money.tree.IRewardInfo} message RewardInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RewardInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RewardInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof client.money.tree.RewardInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {client.money.tree.RewardInfo} RewardInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RewardInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client.money.tree.RewardInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.nickname = reader.string();
                                break;
                            case 2:
                                if (!(message.reward && message.reward.length))
                                    message.reward = [];
                                message.reward.push($root.client.money.tree.GiftInfo.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RewardInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof client.money.tree.RewardInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {client.money.tree.RewardInfo} RewardInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RewardInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RewardInfo message.
                 * @function verify
                 * @memberof client.money.tree.RewardInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RewardInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.nickname != null && message.hasOwnProperty("nickname"))
                        if (!$util.isString(message.nickname))
                            return "nickname: string expected";
                    if (message.reward != null && message.hasOwnProperty("reward")) {
                        if (!Array.isArray(message.reward))
                            return "reward: array expected";
                        for (var i = 0; i < message.reward.length; ++i) {
                            var error = $root.client.money.tree.GiftInfo.verify(message.reward[i]);
                            if (error)
                                return "reward." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a RewardInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof client.money.tree.RewardInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {client.money.tree.RewardInfo} RewardInfo
                 */
                RewardInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.client.money.tree.RewardInfo)
                        return object;
                    var message = new $root.client.money.tree.RewardInfo();
                    if (object.nickname != null)
                        message.nickname = String(object.nickname);
                    if (object.reward) {
                        if (!Array.isArray(object.reward))
                            throw TypeError(".client.money.tree.RewardInfo.reward: array expected");
                        message.reward = [];
                        for (var i = 0; i < object.reward.length; ++i) {
                            if (typeof object.reward[i] !== "object")
                                throw TypeError(".client.money.tree.RewardInfo.reward: object expected");
                            message.reward[i] = $root.client.money.tree.GiftInfo.fromObject(object.reward[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a RewardInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof client.money.tree.RewardInfo
                 * @static
                 * @param {client.money.tree.RewardInfo} message RewardInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RewardInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.reward = [];
                    if (options.defaults)
                        object.nickname = "";
                    if (message.nickname != null && message.hasOwnProperty("nickname"))
                        object.nickname = message.nickname;
                    if (message.reward && message.reward.length) {
                        object.reward = [];
                        for (var j = 0; j < message.reward.length; ++j)
                            object.reward[j] = $root.client.money.tree.GiftInfo.toObject(message.reward[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this RewardInfo to JSON.
                 * @function toJSON
                 * @memberof client.money.tree.RewardInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RewardInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return RewardInfo;
            })();

            tree.GiftInfo = (function () {

                /**
                 * Properties of a GiftInfo.
                 * @memberof client.money.tree
                 * @interface IGiftInfo
                 * @property {string|null} [giftName] GiftInfo giftName
                 * @property {number|null} [num] GiftInfo num
                 * @property {string|null} [icon] GiftInfo icon
                 */

                /**
                 * Constructs a new GiftInfo.
                 * @memberof client.money.tree
                 * @classdesc Represents a GiftInfo.
                 * @implements IGiftInfo
                 * @constructor
                 * @param {client.money.tree.IGiftInfo=} [properties] Properties to set
                 */
                function GiftInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GiftInfo giftName.
                 * @member {string} giftName
                 * @memberof client.money.tree.GiftInfo
                 * @instance
                 */
                GiftInfo.prototype.giftName = "";

                /**
                 * GiftInfo num.
                 * @member {number} num
                 * @memberof client.money.tree.GiftInfo
                 * @instance
                 */
                GiftInfo.prototype.num = 0;

                /**
                 * GiftInfo icon.
                 * @member {string} icon
                 * @memberof client.money.tree.GiftInfo
                 * @instance
                 */
                GiftInfo.prototype.icon = "";

                /**
                 * Creates a new GiftInfo instance using the specified properties.
                 * @function create
                 * @memberof client.money.tree.GiftInfo
                 * @static
                 * @param {client.money.tree.IGiftInfo=} [properties] Properties to set
                 * @returns {client.money.tree.GiftInfo} GiftInfo instance
                 */
                GiftInfo.create = function create(properties) {
                    return new GiftInfo(properties);
                };

                /**
                 * Encodes the specified GiftInfo message. Does not implicitly {@link client.money.tree.GiftInfo.verify|verify} messages.
                 * @function encode
                 * @memberof client.money.tree.GiftInfo
                 * @static
                 * @param {client.money.tree.IGiftInfo} message GiftInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GiftInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.giftName != null && Object.hasOwnProperty.call(message, "giftName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.giftName);
                    if (message.num != null && Object.hasOwnProperty.call(message, "num"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
                    if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
                    return writer;
                };

                /**
                 * Encodes the specified GiftInfo message, length delimited. Does not implicitly {@link client.money.tree.GiftInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof client.money.tree.GiftInfo
                 * @static
                 * @param {client.money.tree.IGiftInfo} message GiftInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GiftInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GiftInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof client.money.tree.GiftInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {client.money.tree.GiftInfo} GiftInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GiftInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client.money.tree.GiftInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.giftName = reader.string();
                                break;
                            case 2:
                                message.num = reader.int32();
                                break;
                            case 3:
                                message.icon = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GiftInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof client.money.tree.GiftInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {client.money.tree.GiftInfo} GiftInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GiftInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GiftInfo message.
                 * @function verify
                 * @memberof client.money.tree.GiftInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GiftInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.giftName != null && message.hasOwnProperty("giftName"))
                        if (!$util.isString(message.giftName))
                            return "giftName: string expected";
                    if (message.num != null && message.hasOwnProperty("num"))
                        if (!$util.isInteger(message.num))
                            return "num: integer expected";
                    if (message.icon != null && message.hasOwnProperty("icon"))
                        if (!$util.isString(message.icon))
                            return "icon: string expected";
                    return null;
                };

                /**
                 * Creates a GiftInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof client.money.tree.GiftInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {client.money.tree.GiftInfo} GiftInfo
                 */
                GiftInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.client.money.tree.GiftInfo)
                        return object;
                    var message = new $root.client.money.tree.GiftInfo();
                    if (object.giftName != null)
                        message.giftName = String(object.giftName);
                    if (object.num != null)
                        message.num = object.num | 0;
                    if (object.icon != null)
                        message.icon = String(object.icon);
                    return message;
                };

                /**
                 * Creates a plain object from a GiftInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof client.money.tree.GiftInfo
                 * @static
                 * @param {client.money.tree.GiftInfo} message GiftInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GiftInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.giftName = "";
                        object.num = 0;
                        object.icon = "";
                    }
                    if (message.giftName != null && message.hasOwnProperty("giftName"))
                        object.giftName = message.giftName;
                    if (message.num != null && message.hasOwnProperty("num"))
                        object.num = message.num;
                    if (message.icon != null && message.hasOwnProperty("icon"))
                        object.icon = message.icon;
                    return object;
                };

                /**
                 * Converts this GiftInfo to JSON.
                 * @function toJSON
                 * @memberof client.money.tree.GiftInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GiftInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GiftInfo;
            })();

            return tree;
        })();

        return money;
    })();

    return client;
})();

$root.common = (function () {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.Empty = (function () {

        /**
         * Properties of an Empty.
         * @memberof common
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof common
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {common.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof common.Empty
         * @static
         * @param {common.IEmpty=} [properties] Properties to set
         * @returns {common.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @function encode
         * @memberof common.Empty
         * @static
         * @param {common.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Empty
         * @static
         * @param {common.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof common.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof common.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Empty)
                return object;
            return new $root.common.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Empty
         * @static
         * @param {common.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof common.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Empty;
    })();

    common.ErrorMessage = (function () {

        /**
         * Properties of an ErrorMessage.
         * @memberof common
         * @interface IErrorMessage
         * @property {number|null} [code] ErrorMessage code
         * @property {string|null} [msg] ErrorMessage msg
         */

        /**
         * Constructs a new ErrorMessage.
         * @memberof common
         * @classdesc Represents an ErrorMessage.
         * @implements IErrorMessage
         * @constructor
         * @param {common.IErrorMessage=} [properties] Properties to set
         */
        function ErrorMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorMessage code.
         * @member {number} code
         * @memberof common.ErrorMessage
         * @instance
         */
        ErrorMessage.prototype.code = 0;

        /**
         * ErrorMessage msg.
         * @member {string} msg
         * @memberof common.ErrorMessage
         * @instance
         */
        ErrorMessage.prototype.msg = "";

        /**
         * Creates a new ErrorMessage instance using the specified properties.
         * @function create
         * @memberof common.ErrorMessage
         * @static
         * @param {common.IErrorMessage=} [properties] Properties to set
         * @returns {common.ErrorMessage} ErrorMessage instance
         */
        ErrorMessage.create = function create(properties) {
            return new ErrorMessage(properties);
        };

        /**
         * Encodes the specified ErrorMessage message. Does not implicitly {@link common.ErrorMessage.verify|verify} messages.
         * @function encode
         * @memberof common.ErrorMessage
         * @static
         * @param {common.IErrorMessage} message ErrorMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified ErrorMessage message, length delimited. Does not implicitly {@link common.ErrorMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ErrorMessage
         * @static
         * @param {common.IErrorMessage} message ErrorMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ErrorMessage message from the specified reader or buffer.
         * @function decode
         * @memberof common.ErrorMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ErrorMessage} ErrorMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ErrorMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes an ErrorMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ErrorMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ErrorMessage} ErrorMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ErrorMessage message.
         * @function verify
         * @memberof common.ErrorMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ErrorMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates an ErrorMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ErrorMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ErrorMessage} ErrorMessage
         */
        ErrorMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ErrorMessage)
                return object;
            var message = new $root.common.ErrorMessage();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an ErrorMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ErrorMessage
         * @static
         * @param {common.ErrorMessage} message ErrorMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ErrorMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this ErrorMessage to JSON.
         * @function toJSON
         * @memberof common.ErrorMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ErrorMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ErrorMessage;
    })();

    return common;
})();

module.exports = $root;
