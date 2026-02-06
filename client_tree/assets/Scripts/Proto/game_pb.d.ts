import * as $protobuf from "protobufjs";
/** Namespace client. */
export namespace client {

    /** Namespace money. */
    namespace money {

        /** Namespace tree. */
        namespace tree {

            /** RequestCode enum. */
            enum RequestCode {
                INVALID_REQUEST = 0,
                PING = 1
            }

            /** ResponseCode enum. */
            enum ResponseCode {
                INVALID_RESPONSE = 0,
                PONG = 1,
                ERROR = 2,
                MONEY_TREE_REWARD = 100
            }

            /** Properties of a Request. */
            interface IRequest {

                /** Request cmd */
                cmd?: (client.money.tree.RequestCode|null);

                /** Request body */
                body?: (client.money.tree.IRequestBody|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: client.money.tree.IRequest);

                /** Request cmd. */
                public cmd: client.money.tree.RequestCode;

                /** Request body. */
                public body?: (client.money.tree.IRequestBody|null);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: client.money.tree.IRequest): client.money.tree.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link client.money.tree.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: client.money.tree.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link client.money.tree.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: client.money.tree.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client.money.tree.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client.money.tree.Request;

                /**
                 * Verifies a Request message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Request
                 */
                public static fromObject(object: { [k: string]: any }): client.money.tree.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: client.money.tree.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RequestBody. */
            interface IRequestBody {

                /** RequestBody empty */
                empty?: (common.IEmpty|null);
            }

            /** Represents a RequestBody. */
            class RequestBody implements IRequestBody {

                /**
                 * Constructs a new RequestBody.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: client.money.tree.IRequestBody);

                /** RequestBody empty. */
                public empty?: (common.IEmpty|null);

                /** RequestBody body. */
                public body?: "empty";

                /**
                 * Creates a new RequestBody instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestBody instance
                 */
                public static create(properties?: client.money.tree.IRequestBody): client.money.tree.RequestBody;

                /**
                 * Encodes the specified RequestBody message. Does not implicitly {@link client.money.tree.RequestBody.verify|verify} messages.
                 * @param message RequestBody message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: client.money.tree.IRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RequestBody message, length delimited. Does not implicitly {@link client.money.tree.RequestBody.verify|verify} messages.
                 * @param message RequestBody message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: client.money.tree.IRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RequestBody message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client.money.tree.RequestBody;

                /**
                 * Decodes a RequestBody message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RequestBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client.money.tree.RequestBody;

                /**
                 * Verifies a RequestBody message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RequestBody message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RequestBody
                 */
                public static fromObject(object: { [k: string]: any }): client.money.tree.RequestBody;

                /**
                 * Creates a plain object from a RequestBody message. Also converts values to other types if specified.
                 * @param message RequestBody
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: client.money.tree.RequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RequestBody to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response cmd */
                cmd?: (client.money.tree.ResponseCode|null);

                /** Response body */
                body?: (client.money.tree.IResponseBody|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: client.money.tree.IResponse);

                /** Response cmd. */
                public cmd: client.money.tree.ResponseCode;

                /** Response body. */
                public body?: (client.money.tree.IResponseBody|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: client.money.tree.IResponse): client.money.tree.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link client.money.tree.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: client.money.tree.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link client.money.tree.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: client.money.tree.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client.money.tree.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client.money.tree.Response;

                /**
                 * Verifies a Response message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Response message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Response
                 */
                public static fromObject(object: { [k: string]: any }): client.money.tree.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: client.money.tree.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ResponseBody. */
            interface IResponseBody {

                /** ResponseBody error */
                error?: (common.IErrorMessage|null);

                /** ResponseBody rewardInfo */
                rewardInfo?: (client.money.tree.IRewardInfo|null);
            }

            /** Represents a ResponseBody. */
            class ResponseBody implements IResponseBody {

                /**
                 * Constructs a new ResponseBody.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: client.money.tree.IResponseBody);

                /** ResponseBody error. */
                public error?: (common.IErrorMessage|null);

                /** ResponseBody rewardInfo. */
                public rewardInfo?: (client.money.tree.IRewardInfo|null);

                /** ResponseBody body. */
                public body?: ("error"|"rewardInfo");

                /**
                 * Creates a new ResponseBody instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResponseBody instance
                 */
                public static create(properties?: client.money.tree.IResponseBody): client.money.tree.ResponseBody;

                /**
                 * Encodes the specified ResponseBody message. Does not implicitly {@link client.money.tree.ResponseBody.verify|verify} messages.
                 * @param message ResponseBody message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: client.money.tree.IResponseBody, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ResponseBody message, length delimited. Does not implicitly {@link client.money.tree.ResponseBody.verify|verify} messages.
                 * @param message ResponseBody message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: client.money.tree.IResponseBody, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ResponseBody message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResponseBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client.money.tree.ResponseBody;

                /**
                 * Decodes a ResponseBody message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResponseBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client.money.tree.ResponseBody;

                /**
                 * Verifies a ResponseBody message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResponseBody message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResponseBody
                 */
                public static fromObject(object: { [k: string]: any }): client.money.tree.ResponseBody;

                /**
                 * Creates a plain object from a ResponseBody message. Also converts values to other types if specified.
                 * @param message ResponseBody
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: client.money.tree.ResponseBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResponseBody to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RewardInfo. */
            interface IRewardInfo {

                /** RewardInfo nickname */
                nickname?: (string|null);

                /** RewardInfo reward */
                reward?: (client.money.tree.IGiftInfo[]|null);
            }

            /** Represents a RewardInfo. */
            class RewardInfo implements IRewardInfo {

                /**
                 * Constructs a new RewardInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: client.money.tree.IRewardInfo);

                /** RewardInfo nickname. */
                public nickname: string;

                /** RewardInfo reward. */
                public reward: client.money.tree.IGiftInfo[];

                /**
                 * Creates a new RewardInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RewardInfo instance
                 */
                public static create(properties?: client.money.tree.IRewardInfo): client.money.tree.RewardInfo;

                /**
                 * Encodes the specified RewardInfo message. Does not implicitly {@link client.money.tree.RewardInfo.verify|verify} messages.
                 * @param message RewardInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: client.money.tree.IRewardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RewardInfo message, length delimited. Does not implicitly {@link client.money.tree.RewardInfo.verify|verify} messages.
                 * @param message RewardInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: client.money.tree.IRewardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RewardInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RewardInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client.money.tree.RewardInfo;

                /**
                 * Decodes a RewardInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RewardInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client.money.tree.RewardInfo;

                /**
                 * Verifies a RewardInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RewardInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RewardInfo
                 */
                public static fromObject(object: { [k: string]: any }): client.money.tree.RewardInfo;

                /**
                 * Creates a plain object from a RewardInfo message. Also converts values to other types if specified.
                 * @param message RewardInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: client.money.tree.RewardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RewardInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GiftInfo. */
            interface IGiftInfo {

                /** GiftInfo giftName */
                giftName?: (string|null);

                /** GiftInfo num */
                num?: (number|null);

                /** GiftInfo icon */
                icon?: (string|null);
            }

            /** Represents a GiftInfo. */
            class GiftInfo implements IGiftInfo {

                /**
                 * Constructs a new GiftInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: client.money.tree.IGiftInfo);

                /** GiftInfo giftName. */
                public giftName: string;

                /** GiftInfo num. */
                public num: number;

                /** GiftInfo icon. */
                public icon: string;

                /**
                 * Creates a new GiftInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GiftInfo instance
                 */
                public static create(properties?: client.money.tree.IGiftInfo): client.money.tree.GiftInfo;

                /**
                 * Encodes the specified GiftInfo message. Does not implicitly {@link client.money.tree.GiftInfo.verify|verify} messages.
                 * @param message GiftInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: client.money.tree.IGiftInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GiftInfo message, length delimited. Does not implicitly {@link client.money.tree.GiftInfo.verify|verify} messages.
                 * @param message GiftInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: client.money.tree.IGiftInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GiftInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GiftInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client.money.tree.GiftInfo;

                /**
                 * Decodes a GiftInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GiftInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client.money.tree.GiftInfo;

                /**
                 * Verifies a GiftInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GiftInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GiftInfo
                 */
                public static fromObject(object: { [k: string]: any }): client.money.tree.GiftInfo;

                /**
                 * Creates a plain object from a GiftInfo message. Also converts values to other types if specified.
                 * @param message GiftInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: client.money.tree.GiftInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GiftInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of an Empty. */
    interface IEmpty {
    }

    /** Represents an Empty. */
    class Empty implements IEmpty {

        /**
         * Constructs a new Empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: common.IEmpty): common.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Empty;

        /**
         * Verifies an Empty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Empty
         */
        public static fromObject(object: { [k: string]: any }): common.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param message Empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Empty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ErrorMessage. */
    interface IErrorMessage {

        /** ErrorMessage code */
        code?: (number|null);

        /** ErrorMessage msg */
        msg?: (string|null);
    }

    /** Represents an ErrorMessage. */
    class ErrorMessage implements IErrorMessage {

        /**
         * Constructs a new ErrorMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IErrorMessage);

        /** ErrorMessage code. */
        public code: number;

        /** ErrorMessage msg. */
        public msg: string;

        /**
         * Creates a new ErrorMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorMessage instance
         */
        public static create(properties?: common.IErrorMessage): common.ErrorMessage;

        /**
         * Encodes the specified ErrorMessage message. Does not implicitly {@link common.ErrorMessage.verify|verify} messages.
         * @param message ErrorMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IErrorMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ErrorMessage message, length delimited. Does not implicitly {@link common.ErrorMessage.verify|verify} messages.
         * @param message ErrorMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IErrorMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ErrorMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ErrorMessage;

        /**
         * Decodes an ErrorMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ErrorMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ErrorMessage;

        /**
         * Verifies an ErrorMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ErrorMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ErrorMessage
         */
        public static fromObject(object: { [k: string]: any }): common.ErrorMessage;

        /**
         * Creates a plain object from an ErrorMessage message. Also converts values to other types if specified.
         * @param message ErrorMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ErrorMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ErrorMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
