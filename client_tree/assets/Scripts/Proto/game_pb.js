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

    client.lucky_egg = (function () {

        /**
         * Namespace lucky_egg.
         * @memberof client
         * @namespace
         */
        var lucky_egg = {};

        /**
         * RequestCode enum.
         * @name client.lucky_egg.RequestCode
         * @enum {number}
         * @property {number} INVALID_REQUEST=0 INVALID_REQUEST value
         * @property {number} PING=1 PING value
         */
        lucky_egg.RequestCode = (function () {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INVALID_REQUEST"] = 0;
            values[valuesById[1] = "PING"] = 1;
            return values;
        })();

        /**
         * ResponseCode enum.
         * @name client.lucky_egg.ResponseCode
         * @enum {number}
         * @property {number} INVALID_RESPONSE=0 INVALID_RESPONSE value
         * @property {number} PONG=1 PONG value
         * @property {number} ERROR=2 ERROR value
         * @property {number} LUCKY_EGG_REWARD=100 LUCKY_EGG_REWARD value
         */
        lucky_egg.ResponseCode = (function () {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INVALID_RESPONSE"] = 0;
            values[valuesById[1] = "PONG"] = 1;
            values[valuesById[2] = "ERROR"] = 2;
            values[valuesById[100] = "LUCKY_EGG_REWARD"] = 100;
            return values;
        })();

        lucky_egg.Request = (function () {

            /**
             * Properties of a Request.
             * @memberof client.lucky_egg
             * @interface IRequest
             * @property {client.lucky_egg.RequestCode|null} [cmd] Request cmd
             */

            /**
             * Constructs a new Request.
             * @memberof client.lucky_egg
             * @classdesc Represents a Request.
             * @implements IRequest
             * @constructor
             * @param {client.lucky_egg.IRequest=} [properties] Properties to set
             */
            function Request(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Request cmd.
             * @member {client.lucky_egg.RequestCode} cmd
             * @memberof client.lucky_egg.Request
             * @instance
             */
            Request.prototype.cmd = 0;

            /**
             * Creates a new Request instance using the specified properties.
             * @function create
             * @memberof client.lucky_egg.Request
             * @static
             * @param {client.lucky_egg.IRequest=} [properties] Properties to set
             * @returns {client.lucky_egg.Request} Request instance
             */
            Request.create = function create(properties) {
                return new Request(properties);
            };

            /**
             * Encodes the specified Request message. Does not implicitly {@link client.lucky_egg.Request.verify|verify} messages.
             * @function encode
             * @memberof client.lucky_egg.Request
             * @static
             * @param {client.lucky_egg.IRequest} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
                return writer;
            };

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link client.lucky_egg.Request.verify|verify} messages.
             * @function encodeDelimited
             * @memberof client.lucky_egg.Request
             * @static
             * @param {client.lucky_egg.IRequest} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @function decode
             * @memberof client.lucky_egg.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {client.lucky_egg.Request} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client.lucky_egg.Request();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.cmd = reader.int32();
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
             * @memberof client.lucky_egg.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {client.lucky_egg.Request} Request
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
             * @memberof client.lucky_egg.Request
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
                return null;
            };

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof client.lucky_egg.Request
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {client.lucky_egg.Request} Request
             */
            Request.fromObject = function fromObject(object) {
                if (object instanceof $root.client.lucky_egg.Request)
                    return object;
                var message = new $root.client.lucky_egg.Request();
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
                return message;
            };

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @function toObject
             * @memberof client.lucky_egg.Request
             * @static
             * @param {client.lucky_egg.Request} message Request
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Request.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.cmd = options.enums === String ? "INVALID_REQUEST" : 0;
                if (message.cmd != null && message.hasOwnProperty("cmd"))
                    object.cmd = options.enums === String ? $root.client.lucky_egg.RequestCode[message.cmd] : message.cmd;
                return object;
            };

            /**
             * Converts this Request to JSON.
             * @function toJSON
             * @memberof client.lucky_egg.Request
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Request.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Request;
        })();

        lucky_egg.Response = (function () {

            /**
             * Properties of a Response.
             * @memberof client.lucky_egg
             * @interface IResponse
             * @property {client.lucky_egg.ResponseCode|null} [cmd] Response cmd
             * @property {client.lucky_egg.IResponseBody|null} [body] Response body
             */

            /**
             * Constructs a new Response.
             * @memberof client.lucky_egg
             * @classdesc Represents a Response.
             * @implements IResponse
             * @constructor
             * @param {client.lucky_egg.IResponse=} [properties] Properties to set
             */
            function Response(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Response cmd.
             * @member {client.lucky_egg.ResponseCode} cmd
             * @memberof client.lucky_egg.Response
             * @instance
             */
            Response.prototype.cmd = 0;

            /**
             * Response body.
             * @member {client.lucky_egg.IResponseBody|null|undefined} body
             * @memberof client.lucky_egg.Response
             * @instance
             */
            Response.prototype.body = null;

            /**
             * Creates a new Response instance using the specified properties.
             * @function create
             * @memberof client.lucky_egg.Response
             * @static
             * @param {client.lucky_egg.IResponse=} [properties] Properties to set
             * @returns {client.lucky_egg.Response} Response instance
             */
            Response.create = function create(properties) {
                return new Response(properties);
            };

            /**
             * Encodes the specified Response message. Does not implicitly {@link client.lucky_egg.Response.verify|verify} messages.
             * @function encode
             * @memberof client.lucky_egg.Response
             * @static
             * @param {client.lucky_egg.IResponse} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
                if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                    $root.client.lucky_egg.ResponseBody.encode(message.body, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link client.lucky_egg.Response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof client.lucky_egg.Response
             * @static
             * @param {client.lucky_egg.IResponse} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @function decode
             * @memberof client.lucky_egg.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {client.lucky_egg.Response} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client.lucky_egg.Response();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.cmd = reader.int32();
                            break;
                        case 2:
                            message.body = $root.client.lucky_egg.ResponseBody.decode(reader, reader.uint32());
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
             * @memberof client.lucky_egg.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {client.lucky_egg.Response} Response
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
             * @memberof client.lucky_egg.Response
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
                    var error = $root.client.lucky_egg.ResponseBody.verify(message.body);
                    if (error)
                        return "body." + error;
                }
                return null;
            };

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof client.lucky_egg.Response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {client.lucky_egg.Response} Response
             */
            Response.fromObject = function fromObject(object) {
                if (object instanceof $root.client.lucky_egg.Response)
                    return object;
                var message = new $root.client.lucky_egg.Response();
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
                    case "LUCKY_EGG_REWARD":
                    case 100:
                        message.cmd = 100;
                        break;
                }
                if (object.body != null) {
                    if (typeof object.body !== "object")
                        throw TypeError(".client.lucky_egg.Response.body: object expected");
                    message.body = $root.client.lucky_egg.ResponseBody.fromObject(object.body);
                }
                return message;
            };

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof client.lucky_egg.Response
             * @static
             * @param {client.lucky_egg.Response} message Response
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
                    object.cmd = options.enums === String ? $root.client.lucky_egg.ResponseCode[message.cmd] : message.cmd;
                if (message.body != null && message.hasOwnProperty("body"))
                    object.body = $root.client.lucky_egg.ResponseBody.toObject(message.body, options);
                return object;
            };

            /**
             * Converts this Response to JSON.
             * @function toJSON
             * @memberof client.lucky_egg.Response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Response;
        })();

        lucky_egg.ResponseBody = (function () {

            /**
             * Properties of a ResponseBody.
             * @memberof client.lucky_egg
             * @interface IResponseBody
             * @property {client.lucky_egg.IRewardInfo|null} [rewardInfo] ResponseBody rewardInfo
             */

            /**
             * Constructs a new ResponseBody.
             * @memberof client.lucky_egg
             * @classdesc Represents a ResponseBody.
             * @implements IResponseBody
             * @constructor
             * @param {client.lucky_egg.IResponseBody=} [properties] Properties to set
             */
            function ResponseBody(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseBody rewardInfo.
             * @member {client.lucky_egg.IRewardInfo|null|undefined} rewardInfo
             * @memberof client.lucky_egg.ResponseBody
             * @instance
             */
            ResponseBody.prototype.rewardInfo = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * ResponseBody body.
             * @member {"rewardInfo"|undefined} body
             * @memberof client.lucky_egg.ResponseBody
             * @instance
             */
            Object.defineProperty(ResponseBody.prototype, "body", {
                get: $util.oneOfGetter($oneOfFields = ["rewardInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ResponseBody instance using the specified properties.
             * @function create
             * @memberof client.lucky_egg.ResponseBody
             * @static
             * @param {client.lucky_egg.IResponseBody=} [properties] Properties to set
             * @returns {client.lucky_egg.ResponseBody} ResponseBody instance
             */
            ResponseBody.create = function create(properties) {
                return new ResponseBody(properties);
            };

            /**
             * Encodes the specified ResponseBody message. Does not implicitly {@link client.lucky_egg.ResponseBody.verify|verify} messages.
             * @function encode
             * @memberof client.lucky_egg.ResponseBody
             * @static
             * @param {client.lucky_egg.IResponseBody} message ResponseBody message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseBody.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rewardInfo != null && Object.hasOwnProperty.call(message, "rewardInfo"))
                    $root.client.lucky_egg.RewardInfo.encode(message.rewardInfo, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ResponseBody message, length delimited. Does not implicitly {@link client.lucky_egg.ResponseBody.verify|verify} messages.
             * @function encodeDelimited
             * @memberof client.lucky_egg.ResponseBody
             * @static
             * @param {client.lucky_egg.IResponseBody} message ResponseBody message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseBody.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseBody message from the specified reader or buffer.
             * @function decode
             * @memberof client.lucky_egg.ResponseBody
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {client.lucky_egg.ResponseBody} ResponseBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseBody.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client.lucky_egg.ResponseBody();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 100:
                            message.rewardInfo = $root.client.lucky_egg.RewardInfo.decode(reader, reader.uint32());
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
             * @memberof client.lucky_egg.ResponseBody
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {client.lucky_egg.ResponseBody} ResponseBody
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
             * @memberof client.lucky_egg.ResponseBody
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseBody.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.rewardInfo != null && message.hasOwnProperty("rewardInfo")) {
                    properties.body = 1;
                    {
                        var error = $root.client.lucky_egg.RewardInfo.verify(message.rewardInfo);
                        if (error)
                            return "rewardInfo." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ResponseBody message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof client.lucky_egg.ResponseBody
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {client.lucky_egg.ResponseBody} ResponseBody
             */
            ResponseBody.fromObject = function fromObject(object) {
                if (object instanceof $root.client.lucky_egg.ResponseBody)
                    return object;
                var message = new $root.client.lucky_egg.ResponseBody();
                if (object.rewardInfo != null) {
                    if (typeof object.rewardInfo !== "object")
                        throw TypeError(".client.lucky_egg.ResponseBody.rewardInfo: object expected");
                    message.rewardInfo = $root.client.lucky_egg.RewardInfo.fromObject(object.rewardInfo);
                }
                return message;
            };

            /**
             * Creates a plain object from a ResponseBody message. Also converts values to other types if specified.
             * @function toObject
             * @memberof client.lucky_egg.ResponseBody
             * @static
             * @param {client.lucky_egg.ResponseBody} message ResponseBody
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseBody.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.rewardInfo != null && message.hasOwnProperty("rewardInfo")) {
                    object.rewardInfo = $root.client.lucky_egg.RewardInfo.toObject(message.rewardInfo, options);
                    if (options.oneofs)
                        object.body = "rewardInfo";
                }
                return object;
            };

            /**
             * Converts this ResponseBody to JSON.
             * @function toJSON
             * @memberof client.lucky_egg.ResponseBody
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseBody.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseBody;
        })();

        lucky_egg.RewardInfo = (function () {

            /**
             * Properties of a RewardInfo.
             * @memberof client.lucky_egg
             * @interface IRewardInfo
             * @property {string|null} [nickname] RewardInfo nickname
             * @property {Array.<client.lucky_egg.IGiftInfo>|null} [reward] RewardInfo reward
             */

            /**
             * Constructs a new RewardInfo.
             * @memberof client.lucky_egg
             * @classdesc Represents a RewardInfo.
             * @implements IRewardInfo
             * @constructor
             * @param {client.lucky_egg.IRewardInfo=} [properties] Properties to set
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
             * @memberof client.lucky_egg.RewardInfo
             * @instance
             */
            RewardInfo.prototype.nickname = "";

            /**
             * RewardInfo reward.
             * @member {Array.<client.lucky_egg.IGiftInfo>} reward
             * @memberof client.lucky_egg.RewardInfo
             * @instance
             */
            RewardInfo.prototype.reward = $util.emptyArray;

            /**
             * Creates a new RewardInfo instance using the specified properties.
             * @function create
             * @memberof client.lucky_egg.RewardInfo
             * @static
             * @param {client.lucky_egg.IRewardInfo=} [properties] Properties to set
             * @returns {client.lucky_egg.RewardInfo} RewardInfo instance
             */
            RewardInfo.create = function create(properties) {
                return new RewardInfo(properties);
            };

            /**
             * Encodes the specified RewardInfo message. Does not implicitly {@link client.lucky_egg.RewardInfo.verify|verify} messages.
             * @function encode
             * @memberof client.lucky_egg.RewardInfo
             * @static
             * @param {client.lucky_egg.IRewardInfo} message RewardInfo message or plain object to encode
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
                        $root.client.lucky_egg.GiftInfo.encode(message.reward[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RewardInfo message, length delimited. Does not implicitly {@link client.lucky_egg.RewardInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof client.lucky_egg.RewardInfo
             * @static
             * @param {client.lucky_egg.IRewardInfo} message RewardInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RewardInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RewardInfo message from the specified reader or buffer.
             * @function decode
             * @memberof client.lucky_egg.RewardInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {client.lucky_egg.RewardInfo} RewardInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RewardInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client.lucky_egg.RewardInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.nickname = reader.string();
                            break;
                        case 2:
                            if (!(message.reward && message.reward.length))
                                message.reward = [];
                            message.reward.push($root.client.lucky_egg.GiftInfo.decode(reader, reader.uint32()));
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
             * @memberof client.lucky_egg.RewardInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {client.lucky_egg.RewardInfo} RewardInfo
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
             * @memberof client.lucky_egg.RewardInfo
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
                        var error = $root.client.lucky_egg.GiftInfo.verify(message.reward[i]);
                        if (error)
                            return "reward." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RewardInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof client.lucky_egg.RewardInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {client.lucky_egg.RewardInfo} RewardInfo
             */
            RewardInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.client.lucky_egg.RewardInfo)
                    return object;
                var message = new $root.client.lucky_egg.RewardInfo();
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                if (object.reward) {
                    if (!Array.isArray(object.reward))
                        throw TypeError(".client.lucky_egg.RewardInfo.reward: array expected");
                    message.reward = [];
                    for (var i = 0; i < object.reward.length; ++i) {
                        if (typeof object.reward[i] !== "object")
                            throw TypeError(".client.lucky_egg.RewardInfo.reward: object expected");
                        message.reward[i] = $root.client.lucky_egg.GiftInfo.fromObject(object.reward[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a RewardInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof client.lucky_egg.RewardInfo
             * @static
             * @param {client.lucky_egg.RewardInfo} message RewardInfo
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
                        object.reward[j] = $root.client.lucky_egg.GiftInfo.toObject(message.reward[j], options);
                }
                return object;
            };

            /**
             * Converts this RewardInfo to JSON.
             * @function toJSON
             * @memberof client.lucky_egg.RewardInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RewardInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RewardInfo;
        })();

        lucky_egg.GiftInfo = (function () {

            /**
             * Properties of a GiftInfo.
             * @memberof client.lucky_egg
             * @interface IGiftInfo
             * @property {string|null} [giftName] GiftInfo giftName
             * @property {number|null} [num] GiftInfo num
             */

            /**
             * Constructs a new GiftInfo.
             * @memberof client.lucky_egg
             * @classdesc Represents a GiftInfo.
             * @implements IGiftInfo
             * @constructor
             * @param {client.lucky_egg.IGiftInfo=} [properties] Properties to set
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
             * @memberof client.lucky_egg.GiftInfo
             * @instance
             */
            GiftInfo.prototype.giftName = "";

            /**
             * GiftInfo num.
             * @member {number} num
             * @memberof client.lucky_egg.GiftInfo
             * @instance
             */
            GiftInfo.prototype.num = 0;

            /**
             * Creates a new GiftInfo instance using the specified properties.
             * @function create
             * @memberof client.lucky_egg.GiftInfo
             * @static
             * @param {client.lucky_egg.IGiftInfo=} [properties] Properties to set
             * @returns {client.lucky_egg.GiftInfo} GiftInfo instance
             */
            GiftInfo.create = function create(properties) {
                return new GiftInfo(properties);
            };

            /**
             * Encodes the specified GiftInfo message. Does not implicitly {@link client.lucky_egg.GiftInfo.verify|verify} messages.
             * @function encode
             * @memberof client.lucky_egg.GiftInfo
             * @static
             * @param {client.lucky_egg.IGiftInfo} message GiftInfo message or plain object to encode
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
                return writer;
            };

            /**
             * Encodes the specified GiftInfo message, length delimited. Does not implicitly {@link client.lucky_egg.GiftInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof client.lucky_egg.GiftInfo
             * @static
             * @param {client.lucky_egg.IGiftInfo} message GiftInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GiftInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GiftInfo message from the specified reader or buffer.
             * @function decode
             * @memberof client.lucky_egg.GiftInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {client.lucky_egg.GiftInfo} GiftInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GiftInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client.lucky_egg.GiftInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.giftName = reader.string();
                            break;
                        case 2:
                            message.num = reader.int32();
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
             * @memberof client.lucky_egg.GiftInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {client.lucky_egg.GiftInfo} GiftInfo
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
             * @memberof client.lucky_egg.GiftInfo
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
                return null;
            };

            /**
             * Creates a GiftInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof client.lucky_egg.GiftInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {client.lucky_egg.GiftInfo} GiftInfo
             */
            GiftInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.client.lucky_egg.GiftInfo)
                    return object;
                var message = new $root.client.lucky_egg.GiftInfo();
                if (object.giftName != null)
                    message.giftName = String(object.giftName);
                if (object.num != null)
                    message.num = object.num | 0;
                return message;
            };

            /**
             * Creates a plain object from a GiftInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof client.lucky_egg.GiftInfo
             * @static
             * @param {client.lucky_egg.GiftInfo} message GiftInfo
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
                }
                if (message.giftName != null && message.hasOwnProperty("giftName"))
                    object.giftName = message.giftName;
                if (message.num != null && message.hasOwnProperty("num"))
                    object.num = message.num;
                return object;
            };

            /**
             * Converts this GiftInfo to JSON.
             * @function toJSON
             * @memberof client.lucky_egg.GiftInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GiftInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GiftInfo;
        })();

        return lucky_egg;
    })();

    return client;
})();

module.exports = $root;
