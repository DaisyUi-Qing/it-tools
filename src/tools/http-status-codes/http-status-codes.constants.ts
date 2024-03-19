export const codesByCategories: {
  category: string
  codes: {
    code: number
    name: string
    description: string
    type: 'HTTP' | 'WebDav'
  }[]
}[] = [
  {
    category: '1xx 信息响应',
    codes: [
      {
        code: 100,
        name: 'Continue',
        description: '等待客户端发出请求正文.',
        type: 'HTTP',
      },
      {
        code: 101,
        name: 'Switching Protocols',
        description: '服务器已同意更改协议.',
        type: 'HTTP',
      },
      {
        code: 102,
        name: 'Processing',
        description: '服务器正在处理请求，但尚无响应.',
        type: 'WebDav',
      },
      {
        code: 103,
        name: 'Early Hints',
        description: '服务器在最终 HTTP 消息之前返回一些响应标头.',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '2xx 成功',
    codes: [
      {
        code: 200,
        name: 'OK',
        description: 'HTTP 请求成功的标准响应.',
        type: 'HTTP',
      },
      {
        code: 201,
        name: 'Created',
        description: '请求已接受，从而创建了新资源.',
        type: 'HTTP',
      },
      {
        code: 202,
        name: 'Accepted',
        description: '请求已被接受处理，但处理尚未完成.',
        type: 'HTTP',
      },
      {
        code: 203,
        name: 'Non-Authoritative Information',
        description:
          '请求成功，但原始请求的内容已被转换代理修改.',
        type: 'HTTP',
      },
      {
        code: 204,
        name: 'No Content',
        description: '服务器已成功处理请求，但未返回任何内容.',
        type: 'HTTP',
      },
      {
        code: 205,
        name: 'Reset Content',
        description: '服务器指示重新初始化发送此请求的文档视图.',
        type: 'HTTP',
      },
      {
        code: 206,
        name: 'Partial Content',
        description: '由于客户端发送的范围标头，服务器仅提供部分资源.',
        type: 'HTTP',
      },
      {
        code: 207,
        name: 'Multi-Status',
        description:
          '后面的消息正文是 XML 消息，可以包含多个单独的响应代码.',
        type: 'WebDav',
      },
      {
        code: 208,
        name: 'Already Reported',
        description:
          'DAV 绑定的成员已在 （多状态） 响应的前面部分枚举.',
        type: 'WebDav',
      },
      {
        code: 226,
        name: 'IM Used',
        description:
          '服务器已满足对资源的请求，响应是结果的表示形式.',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '3xx 重定向',
    codes: [
      {
        code: 300,
        name: 'Multiple Choices',
        description: '指示客户端可能遵循的资源的多个选项.',
        type: 'HTTP',
      },
      {
        code: 301,
        name: 'Moved Permanently',
        description: '此请求和所有将来的请求都应定向到给定的 URI.',
        type: 'HTTP',
      },
      {
        code: 302,
        name: 'Found',
        description: '重定向到另一个 URL。这是与标准相矛盾的行业实践的一个例子.',
        type: 'HTTP',
      },
      {
        code: 303,
        name: 'See Other',
        description: '可以使用 GET 方法在另一个 URI 下找到对请求的响应.',
        type: 'HTTP',
      },
      {
        code: 304,
        name: 'Not Modified',
        description:
          '指示自请求标头指定的版本以来未修改资源.',
        type: 'HTTP',
      },
      {
        code: 305,
        name: 'Use Proxy',
        description:
          '请求的资源只能通过代理获得，其地址在响应中提供.',
        type: 'HTTP',
      },
      {
        code: 306,
        name: 'Switch Proxy',
        description: '不再使用。原意为“后续请求应使用指定的代理."',
        type: 'HTTP',
      },
      {
        code: 307,
        name: 'Temporary Redirect',
        description:
          '在这种情况下，应使用另一个 URI 重复请求;但是，将来的请求仍应使用原始 URI.',
        type: 'HTTP',
      },
      {
        code: 308,
        name: 'Permanent Redirect',
        description: '应使用另一个 URI 重复请求和所有将来的请求.',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '4xx 客户端错误',
    codes: [
      {
        code: 400,
        name: 'Bad Request',
        description: '由于明显的客户端错误，服务器无法或不会处理请求.',
        type: 'HTTP',
      },
      {
        code: 401,
        name: 'Unauthorized',
        description:
          '与 403 Forbidden 类似，但专门用于需要身份验证且已失败或尚未提供的情况.',
        type: 'HTTP',
      },
      {
        code: 402,
        name: 'Payment Required',
        description:
          '保留以备将来使用。最初的意图是，该代码可以用作某种形式的数字现金或小额支付计划的一部分.',
        type: 'HTTP',
      },
      {
        code: 403,
        name: 'Forbidden',
        description:
          '请求有效，但服务器拒绝操作。用户可能没有资源所需的权限.',
        type: 'HTTP',
      },
      {
        code: 404,
        name: 'Not Found',
        description: '找不到请求的资源，但将来可能可用.',
        type: 'HTTP',
      },
      {
        code: 405,
        name: 'Method Not Allowed',
        description: '请求的资源不支持请求方法.',
        type: 'HTTP',
      },
      {
        code: 406,
        name: 'Not Acceptable',
        description:
          '根据请求中发送的 Accept 标头，请求的资源只能生成不可接受的内容.',
        type: 'HTTP',
      },
      {
        code: 407,
        name: 'Proxy Authentication Required',
        description: '客户端必须首先使用代理对自身进行身份验证.',
        type: 'HTTP',
      },
      {
        code: 408,
        name: 'Request Timeout',
        description: '服务器在等待请求时超时.',
        type: 'HTTP',
      },
      {
        code: 409,
        name: 'Conflict',
        description:
          '指示由于请求中的冲突（例如编辑冲突）而无法处理请求.',
        type: 'HTTP',
      },
      {
        code: 410,
        name: 'Gone',
        description: '指示请求的资源不再可用，并且不会再次可用.',
        type: 'HTTP',
      },
      {
        code: 411,
        name: 'Length Required',
        description:
          '该请求未指定其内容的长度，而请求的资源需要该长度.',
        type: 'HTTP',
      },
      {
        code: 412,
        name: 'Precondition Failed',
        description: '服务器不满足请求者对请求提出的前提条件之一.',
        type: 'HTTP',
      },
      {
        code: 413,
        name: 'Payload Too Large',
        description: '请求大于服务器愿意或能够处理的范围.',
        type: 'HTTP',
      },
      {
        code: 414,
        name: 'URI Too Long',
        description: '提供的 URI 太长，服务器无法处理.',
        type: 'HTTP',
      },
      {
        code: 415,
        name: 'Unsupported Media Type',
        description: '请求实体具有服务器或资源不支持的媒体类型.',
        type: 'HTTP',
      },
      {
        code: 416,
        name: 'Range Not Satisfiable',
        description: '客户端已请求文件的一部分，但服务器无法提供该部分.',
        type: 'HTTP',
      },
      {
        code: 417,
        name: 'Expectation Failed',
        description: '服务器无法满足 Expect request-header 字段的要求.',
        type: 'HTTP',
      },
      {
        code: 418,
        name: 'I\'m a teapot',
        description: '服务员拒绝尝试用茶壶冲泡咖啡.',
        type: 'HTTP',
      },
      {
        code: 421,
        name: 'Misdirected Request',
        description: '该请求被定向到无法生成响应的服务器.',
        type: 'HTTP',
      },
      {
        code: 422,
        name: 'Unprocessable Entity',
        description: '该请求格式正确，但由于语义错误而无法遵循.',
        type: 'HTTP',
      },
      {
        code: 423,
        name: 'Locked',
        description: '正在访问的资源已锁定.',
        type: 'HTTP',
      },
      {
        code: 424,
        name: 'Failed Dependency',
        description: '由于上一个请求失败，请求失败.',
        type: 'HTTP',
      },
      {
        code: 425,
        name: 'Too Early',
        description: '指示服务器不愿意冒险处理可能重播的请求.',
        type: 'HTTP',
      },
      {
        code: 426,
        name: 'Upgrade Required',
        description: '客户端应切换到其他协议，例如 TLS1.0.',
        type: 'HTTP',
      },
      {
        code: 428,
        name: 'Precondition Required',
        description: '源站要求请求是有条件的.',
        type: 'HTTP',
      },
      {
        code: 429,
        name: 'Too Many Requests',
        description: '用户在给定时间内发送了过多的请求.',
        type: 'HTTP',
      },
      {
        code: 431,
        name: 'Request Header Fields Too Large',
        description:
          '服务器不愿意处理请求，因为单个标头字段或所有标头字段的总和太大.',
        type: 'HTTP',
      },
      {
        code: 451,
        name: 'Unavailable For Legal Reasons',
        description:
          '服务器运营商已收到法律要求，要求拒绝访问某个资源或包含所请求资源的一组资源.',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '5xx 服务器错误',
    codes: [
      {
        code: 500,
        name: 'Internal Server Error',
        description:
          '一般错误消息，在遇到意外情况且没有更具体的消息适用时给出.',
        type: 'HTTP',
      },
      {
        code: 501,
        name: 'Not Implemented',
        description:
          '服务器要么无法识别请求方法，要么无法满足请求.',
        type: 'HTTP',
      },
      {
        code: 502,
        name: 'Bad Gateway',
        description:
          '服务器充当网关或代理，并从上游服务器收到无效响应.',
        type: 'HTTP',
      },
      {
        code: 503,
        name: 'Service Unavailable',
        description: '服务器当前不可用（因为它已过载或因维护而关闭）.',
        type: 'HTTP',
      },
      {
        code: 504,
        name: 'Gateway Timeout',
        description:
          '服务器充当网关或代理，未收到上游服务器的及时响应.',
        type: 'HTTP',
      },
      {
        code: 505,
        name: 'HTTP Version Not Supported',
        description: '服务器不支持请求中使用的 HTTP 协议版本.',
        type: 'HTTP',
      },
      {
        code: 506,
        name: 'Variant Also Negotiates',
        description: '请求的透明内容协商将生成循环引用.',
        type: 'HTTP',
      },
      {
        code: 507,
        name: 'Insufficient Storage',
        description: '服务器无法存储完成请求所需的表示形式.',
        type: 'HTTP',
      },
      {
        code: 508,
        name: 'Loop Detected',
        description: '服务器在处理请求时检测到无限循环.',
        type: 'HTTP',
      },
      {
        code: 510,
        name: 'Not Extended',
        description: '服务器需要对请求进行进一步的扩展才能完成它.',
        type: 'HTTP',
      },
      {
        code: 511,
        name: 'Network Authentication Required',
        description: '客户端需要进行身份验证才能获得网络访问权限.',
        type: 'HTTP',
      },
    ],
  },
];
