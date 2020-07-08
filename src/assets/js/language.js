import {toUpper} from 'lodash'

const language = {
  CN: {
    type: 'CN',
    home: '首页',
    login: '登录',
    wallet_login: '钱包扫码登录',
    logout: '退出登录',
    generate_usde: '质押发行',
    swap_nav_title: 'USDE 生态',
    white_paper: '白皮书',
    pizza_dex: 'PIZZA DEX',
    pizza_dex_title: '去中心化交易所',
    pizza_usde:'PIZZA-USDE',
    pizza_usde_enter: '去中心化金融生态入口',
    base_eos: '基于 EOS',
    base_eos_info: '性能高，转账秒到账，支持更多场景',
    decentralized_trading: '去中心化交易',
    decentralized_trading_info: '无需注册，无需充值、提现',
    trusted_transaction: '交易安全可信',
    trusted_transaction_info: '链上成交，信息透明可查',
    decentralized_issuance: '去中心化发行',
    issuance_with_collateral: '质押即发行，发行量透明',
    usde_system: 'USDE 系统',
    usde_system_title: '该系统将依托加密货币质押合约生成 USDE，通过超额质押消弭市场信任风险，并 1:1 锚定美元',
    usde_system_slogn:'去中心化发行、透明、自由、高性能实时结算，实现多样金融衍生品场景的质押型稳定币生态',
    usde_system_pledge: 'EOS 质押',
    usde_system_pledge_info: '发行稳定币 USDE、奖励治理币 PIZZA',
    usde_system_bid: 'USDE 参与拍卖抢单',
    usde_system_bid_info: '低于市场价买入 EOS',
    usde_system_pizza: '治理币 PIZZA',
    usde_system_pizza_info: '参与社区治理、投票',
    usde_partners: '合作伙伴',
    join_us: '加入社区',
    change: '涨幅',
    high: '最高价',
    low: '最低价',
    day_h_vol: '24h 量/EOS',
    price: '行情',
    price_index: '价格指数',
    day_price_index: '24小时指数图',
    eos_collateral: 'EOS 质押总量',
    circulating_usde: 'USDE 流通总量',
    overall_CR: '平均质押率',
    avg_CR: '平均质押率 (%)',
    current_CR: '当前质押率',
    minimum_CR: '最低质押率',
    penalty: '强平手续费',
    maintenance_CR: '安全平仓比率',
    current_CDP: '质押深度',
    redeemed_CDP: '解押深度',
    eos_amount_z: '质押数量(EOS)',
    eos_amount_j: '解押数量(EOS)',
    ratio: '质押率 (%)',
    new_ratio: '新质押率',
    usde_amount: '发行数量(USDE)',
    cycle: '质押周期',
    reward: '收益数量(PIZZA)',
    create_CDP: '生成质押债仓',
    create_CDP_info: '质押 EOS 以创建质押债仓，并生成 USDE 稳定币。',
    desired_collateral_amount: '请输入您要质押的数量',
    the_value_must_be_larger_or_equal_to_1: 'EOS 数量需大于或等于1',
    desired_usde_amount: '请输入您要获取的数量',
    expected_liquidation_price: '预计平仓值：',
    liquidation_price: '预计平仓价格',
    new_liquidation_price: '新预计平仓价格',
    pledge_tab: '质押',
    confirm_pledge: '确认质押',
    choose_order_redeem: '请选择要解押的订单',
    last_num_days: '已质押{variable}天',
    each_cycle_last_days: '质押奖励每14天结算一次',
    each_cycle_last_days_info: '质押奖励是系统对用户质押行为的额外奖励，每14天统一结算一次',
    expected_cycle_reward: '本轮质押收益：',
    redeemable_amoumt: '可解押数量：',
    redeem_tab: '解押',
    confirm_redeem: '确认解押',
    account: 'EOS 账户情况',
    aggregate_asset: '资产折合',
    please_login_first: '登录后查看资产',
    please_login_first_info: '请先登录',
    reward_countdown: '奖励领取',
    reward_countdown_info: '奖励周期倒计时只服务于质押奖励的结算，不对实际质押债仓操作产生任何影响。所有人共享同一个倒计时。详情请阅读《奖励机制》',
    countdown: '倒计时',
    redeem: '领取奖励',
    token_portion: '币总量的占比',
    eos_supply: '已质押币占 EOS<br>发行总量比',
    mined_pizza_token: '已挖代币占总量比',
    terminated: '质押中订单',
    completed: '已完成订单',
    time_order: '时间排序',
    order: '订单号',
    time: '订单时间',
    collateral_amount: '质押数量',
    till_next_cycle: '距下一周期',
    status: '状态',
    active: '质押中',
    redeemed: '已解押',
    liquidating: '质押订单被强平',
    liquidated: '爆仓已清算',
    reviewing: '审核中',
    with_be_liquidated: '您的质押订单处于危险状态，当质押率高于80%时将被平仓',
    whitepaper: '项目白皮书',
    liquidation_mechanism: '平仓机制',
    liquidation_mechanism_info: `质押率（LTV）= 稳定币价值 / 质押物价值<br/><br/>

    用户通过质押存入质押物来创建质押债仓并生成 USDE 稳定币。最高初始质押率 70%，如果质押率触及或高于 80%，则触发债仓强平机制。<br/><br/>

    即是说每个 USDE 都 1:1 锚定美元，并且至少有 $1.25 的质押物作为支撑。<br/><br/>

    预期强平价格 = 仓内USDE价值 / 强平质押率 / 仓内质押物数量<br/><br/>

    当一个仓位触发了平仓线，那么系统主合约将判定强平发生。系统从质押物里收取与债务的 a% 等值的质押物作为强平手续费，并转入手续费账户。<br/><br/>

    与此同时，系统还将判定偿清仓内 USDE 债务时所需的质押物，并从质押物里收取与债务的 b% 等值的质押物作为预置的抢拍奖励，然后一并发送至强平智能合约，开放予用户参与强平抢拍。完成以上扣除后，系统将剩余质押物归还予该质押债仓的原持有者。成功参与抢拍的用户将偿付该质押债仓内的 USDE 债务，获得对应数量的强平质押物以及抢拍奖励。<br/><br/>

    强平质押物数量 = （1 + b%）* USDE 债务价值 / 实际强平价格<br/><br/>

    归还质押物数量 =（1 - a% * 强平质押率）* 质押物数量 - 强平质押物数量<br/><br/>

    抢拍利润率 = 强平质押物数量 * 当前质押物价格 / USDE 债务价值 - 1<br/><br/>

    在强平过程中，强平质押物数量与 USDE 债务价值通常为常数，即在上方式子中当前质押物价格是唯一变量，即抢拍利润率随着 质押物 价格的变化而变化。<br/><br/>

    当市场波动较大时，市面上的流动性可能不足。因此，当强平程序启动后币价继续下行并导致抢拍利润持续下跌，那么当利润率跌至 c% 时，一个系统抢拍者将偿清 USDE 债务并收取相应数量的质押物。<br/><br/>

    即，抢拍利润率 <= c% * 原质押物数量 * 实际强平价格，一个系统账户将自动参与强平。<br/><br/>

    在当前系统设置下，a = 0，b = 6，c = 1.5。即当一个强平事件发生拍时，它的初始抢拍利润率通常约为6%。`,

    reward_mechanism: '奖励机制',
    reward_mechanism_info: `从 <span>05/01/2019</span>（周三）到  <span>05/24/2022</span> （周二）约三年时间（160周）里，系统将最多提供 PIZZA 币总量的 1%，即共计 1000 万枚 PIZZA 币作为用户质押挖矿奖励。以下是激励计划的细节。<br/>（更多更新信息请以官网 <span>PIZZA.LIVE</span> 的更新公告为准。）<br/><br/><p>一、质押奖励</p><span>质押奖励数量：</span>系统冷启动质押奖励共计 1000万 PIZZA，占总量的1%。<br/><br/><span>质押奖励周期：</span><span>为期 160 周（约三年）的挖矿周期</span>分为4个减半周期，分别分配质押奖励额的50%，25%，12.5%，6.25%，分别对应500万，250万，125万，62.5万的 PIZZA 奖励额度。4轮减半完成后剩余的6.25%将在届时由社区决定使用方式。用户可在任意时间申领 PIZZA 奖励。<br/><br/><p>二、快照</p>以 CDP 订单中的质押物为目标快照，每小时整点对所有 CDP 订单进行快照。<br/><br/><p>三、质押奖励计算公式</p><span>每小时释放的 PIZZA 总额 = 质押奖励总额 * 该轮减半周期加权 / 减半周期总小时数</span><br/><br/><span>奖励比例 =  W1 * 该用户质押的 EOS 数量 / EOS 质押总量 + W2 * 该用户质押的 USDE 数量 / USDE 质押总量</span><br/><br/><span>W1 和 W2 分别为上述公式中 EOS 和 USDE 的加权比率。</span><br/><br/><span>W1 + W2 = 1</span><br/><br/><span>用户在某快照中可获得 PIZZA 数量 = 本次快照释放的 PIZZA 总额 * 奖励比例</span><br/><br/><span>CDP 持有者获得的 PIZZA 数量 = （快照1 + 快照2 +快照3...快照n）</span><br/><br/><span>快照 n ：CDP持有者在第 n 次快照中获得的 PIZZA 数量</span><br/><br/>*备注：<br/>第一个减半周期（总奖励份额的50%）将分为前14周和后26周，两个部分各拥有占奖励总额25%的 PIZZA 奖励额度。该设定的目的是为了更好地奖励项目的最初期关注者。<br/><br/><p>例如：</p>假设在第二次减半周期（占奖励总额的25%）期间，有两周时间里每次快照中的质押物都为 500 EOS 与 200 USDE，其中 Bob 质押100 EOS 并生成100 USDE，Alice 质押 400 EOS 生成 100 USDE。由于目前是第二次减半周期，所以：<br/><br/><span>每次快照释放的 PIZZA 总额 = 10,000,000 * 25% / (40 * 7 * 24) = 372.0238 PIZZA</span><br/><br/><span>两周共计累积奖励 372.0238 * 24 * 14 = 125,000 PIZZA </span><br/><br/><span>Bob 在每次快照中的奖励比例 = W1 * 100/500 + W2 * 100/200</span><br/><br/><span>Alice 在每次快照中的奖励比例 = W1 * 400/500 + W2 * 100/200</span><br/><br/>假设1：当前 W1 = 0, W2 = 100%，则 Bob 与 Alice 各获得 50% 质押奖励。<br/>假设2：当前 W1 = 50%，W2 = 50%，则 Bob 获得本次奖励的 35%，Alice 获得65%。<br/><br/>我们采用假设2 的 W1 与 W2 取值，以及两人的奖励比例，Bob 在两周 336 次快照中共积累 <span>125,000 * 35% = 43,750 PIZZA</span> 的待申领奖励，<br/><br/><span>Alice 在两周 336 次快照中共累积 125,000 * 65% = 81,250 PIZZA 的待申领奖励。</span><br/><br/>*用户实际上可以在任意时间申领奖励，以上仅仅是假设他们恰好在一个时间进行申领操作。<br/><br/>当前设置：<br/><span>W1 = 0, W2 = 100%.</span><br/><br/>`,
    terms_of_service: '服务条款',
    terms_of_service_info: '<p>声明</p>本条款是您与服务提供商 <span>PIZZA.LIVE</span> 之间就使用任何由 <span>www.pizza.live</span> 提供的服务时，所达成的权利义务关系的协议。请在使用我们的服务前仔细阅读、并确认您已理解相关条例。授权登录即表示您已同意本协议中所有条款。如有异议，请您立即停止使用相关服务。如果您对本条款有任何疑问，请联系我们的客户服务团队 <span>support@pizza.live</span>。<br/><br/><p>授权登录</p>所有用户在使用 <span>PIZZA.LIVE</span> 时需授权登录，平台不会保存用户任何关于安全信息，在特定条件下，平台保留拒绝为您质押交易的权力。<br/><br/><span>争议解决办法</span><br/><br/><span>PIZZA.LIVE</span> 保留解决争议的权力。包括对用户侵犯他人权利，违反法律法规，异常交易以及条款中未明确提及的其他相关问题的处理。用户同意承担纠纷解决过程中所产生的费用。<br/><br/><span>PIZZA.LIVE 服务使用准则</span><br/><br/>在使用 <span>PIZZA.LIVE</span> 服务期间您同意遵守以下协议：<br/>在使用 <span>PIZZA.LIVE</span> 服务期间所有活动都符合法律法规的要求以及 <span>PIZZA.LIVE</span> 的使用规则。<br/>不违反公共利益，公共道德及其他合法权益。<br/>不偷税漏税，不违反本协议及相关规定。<br/>若违反上述承诺并因此造成法律后果，您将独立承担所有法律责任，并赔偿 <span>PIZZA.LIVE</span> 因此类违规行为而引起的诉讼，索赔费用。<br/><br/>未经 <span>PIZZA.LIVE</span> 书面同意，不得将本平台上显示的任何数据或信息用于商业目的。 不采取不正当竞争行为，也不尝试干预 <span>PIZZA.LIVE</span> 的正常运营。此类恶意行为包括但不限于：<br/>利用设备，软件或程序干扰网站；<br/> 数据加载请求不合理导致网络设备过载；<br/>  在市场上恶意买卖。<br/><br/>使用 <span>PIZZA.LIVE</span> 表示您同意 <span>PIZZA.LIVE</span> 在未事先通知的情况下，有权单方面判断您是否违反了上述任何约定并采取行动。包括但不限于：<br/>阻止并关闭订单请求；<br/> 向当局报告事件；<br/> 发布所指控的违规行为和已采取的行动；<br/> 删除您发布的违规信息。<br/><br/>若您的违规行为给第三方造成任何损失，应当以个人名义承担所有法律责任，并保证 <span>PIZZA.LIVE</span> 免受罚款或额外费用等损失。若由于您的违规行为导致任何损失，第三方要求赔偿或遭受行政机构处罚，您将承担 <span>PIZZA.LIVE</span> 因此造成的损失，包括律师费。<br/><br/><span>服务费</span><br/><br/><span>PIZZA.LIVE</span> 保留向用户征收服务费的权利， 目前为免服务费。<br/><br/><p>服务条款</p><span>PIZZA.LIVE</span> 将不对所提供服务相关技术的可靠性，稳定性，准确性和完整性提供任何书面形式的保证。 <span>PIZZA.LIVE</span> 将仅用作交易平台使用，同时可获得与数字货币有关的信息并进行与数字货币有关的交易行为。 <span>PIZZA.LIVE</span> 不能控制数字货币的质量，安全性及合法性，以及交易信息的真实性或交易各方履行规则的能力。因此，在使用服务前，您必须慎重考虑投资风险，交易信息和投资决策的合法性及有效性。<br/><br/><p>责任范围</p>您同意 <span>PIZZA.LIVE</span> 将不承担因下列任何事件造成的损失，包括但不限于：<br/> 利润，商誉，数据损失或任何其他无形损失；<br/> 使用 <span>PIZZA.LIVE</span> 服务或使用 <span>PIZZA.LIVE</span> 服务失败；<br/> <span>PIZZA.LIVE</span> 均不对因定期网络维护或电力故障，自然灾害，服务提供方问题或政府行为等外部因素导致的服务故障或延迟所导致的损失负责。<br/><br/><p>赔偿</p>若出现任何违反本协议的行为，或您在使用 <span>PIZZA.LIVE</span> 服务期间违反相关法律，法规或第三方的权益。您同意赔偿 <span>PIZZA.LIVE</span> 及其关联公司，承包商，许可方及其各自董事，高级职员，员工和代理人免受索赔和损害（包括律师费，由监管机构施加的罚金或罚金）。<br/><br/><p>终止协议</p>您同意我们有权立即冻结或锁定您的个人账户相关的资金，并在我们怀疑您由以下情况时，如违反服务条款，隐私政策，反洗钱/ CTF法案或任何相关法律法规时暂停您访问 <span>PIZZA.LIVE</span>。<span>PIZZA.LIVE</span> 有权保留和使用交易数据及与此类账户相关的所有信息。以下情况同样适用：<br/>账户受刑事调查或其他未决诉讼的影响；<br/> 检测到账户中的异常活动；<br/> 检测到对账户未经授权的访问；<br/> 接到法院或监管机构/政府机构的命令。<br/><br/>下述情况发生时， <span>PIZZA.LIVE</span> 有权阻止您的账户访问，并永久终止您对 <span>PIZZA.LIVE</span> 的访问权限：<br/>若由于舞弊，反洗钱调查或违反 <span>PIZZA.LIVE</span> 条款（例如，在受制裁国家使用 <span>PIZZA.LIVE</span> 进行交易）而导致账户被第三方组织暂停/关闭， <span>PIZZA.LIVE</span> 将向该第三方组织全权托管相关用户数据。<br/><br/><p>遵守当地法律</p> <span>PIZZA.LIVE</span> 用户有责任遵守当地法律。用户有责任和义务遵守当地法律法规如税收政策。  <span>PIZZA.LIVE</span> 及其用户均声明其资金来源合法。<span>PIZZA.LIVE</span> 将保持与全球执法机构的合作，并坚决扣留，冻结，终止被法律授权或调查的用户账户等相关。<br/><br/>如有任何投诉及反馈问题，请及时联系我们 <span>support@pizza.live</span>，感谢您得支持！',
    contact_us: '联系我们',
    usde_system_framework: 'USDE 系统架构图',
    details: '详情',
    less: '收起',
    no_data: '暂无数据',
    contribute: '捐赠入口',
    coming_soon: '即将发布',
    fiat_trading: '法币交易',
    system_verification: '透明验证',
    bid: '清算拍卖',
    circulating: '当前债仓',
    liquidating_eos: '当前可拍卖',
    avg_profit_margin: '平均利润率',
    pledge_depth: '质押深度图',
    liquidation_time: '爆仓时间',
    order_number: '订单号',
    profit_margin: '订单利润率',
    action: '操作',
    bid_action: '立即拍下',
    confirmation: '确认',
    collateral_remained: '可拍下数量',
    all: '全部',
    confirm: '确认拍下',
    debt_remaind: '债仓剩余',
    auction_input_info: '请输入支付的 USDE 数量',
    available: '可用资产：',
    eos_receivable: '拍得数量：',
    warning: '预警',
    margin_warning: '预警订单',
    bidded: '已拍下订单',
    bid_time: '拍下时间',
    fee: '费用 (USDE)',
    get_eos_amount: '拍下数量 (EOS)',
    claiming_reward: '奖励发放中',
    creating_order: '订单创建中',
    redeeming: '订单解押中',
    introduction: '视频介绍',
    get_more_reward: '发行更多 USDE，获得更丰厚的 PIZZA 奖励',
    asset: '资产',
    build_community: '共同建设 PIZZA-USDE 社区',
    max_pledge: '最大可发行',
    my_CDP: '我的债仓',
    USDE_issuance: 'USDE 发行总量',
    risky_CDP: '预警仓位数量',
    reward_rules: '奖励规则',
    bid_oder: '拍卖订单',
    historical_avg_profit: '历史平均利润率',
    my_asset: '我的资产',
    asset_token: '币种',
    asset_available: '可用',
    asset_Frozen: '冻结',
    asset_estimated_eos: 'EOS 估值',
    asset_estimated_cny: 'CNY 估值',
    asset_estimated_usde: 'USDE 估值',
    asset_action: '操作',
    trade: '交易',
    estimated: '折合',
    warning_eos_total: 'EOS 总量：',
    // 闪兑
    swap_ecosystem: '生态',
    swap_title: '去中心化闪兑',
    swap_desc: '闪兑价格为实时计算，因受市场因素影响，实际得到数量以瞬时成交价格为准',
    swap_send: '支付',
    swap_get: '得到',
    swap_swap_now: '立即兑换',
    swap_all: '全部',
    swap_enter: '请输入',
    swap_available: '可用',
    swap_history: ' 兑换记录',
    swap_rules: '兑换规则',
    swap_fee: '手续费',
    swap_time: '时间',
    swap_cancel: '取消',
    swap_close: '关闭',
    swap_fee_fn: fee => {
      return `手续费：${fee}, 按照 USDE 计价`
    },
    market_maker: '做市商',
    maker_total_reward: '累计收益',
    maker_bank: '做市商预存池',
    maker_deposit: '存入',
    maker_withdraw: '提现',
    maker_making_fund: '做市商池',
    maker_current_ratio: (value, symbol = 'USDE') => `当前比例（${toUpper(symbol)} : EOS = ${value}）`,
    maker_invest: '立即投入',
    maker_desc: '为减少因市场因素影响而改变存入做市商池的比例，需将 EOS 以及 USDE 存入做市商预存池中，再将预存池中的的 EOS 及 USDE 按比例投入。',
    maker_overall_balance: '当前投入',
    maker_profit: '做市商收益',
    maker_withdraw_to_bank: '取出',
    maker_claim_reward: '领取收益',
    maker_notice_title: '注意说明',
    maker_notice_1: '1.做市商资金可在进入市商池的第三个 UTC 0:00:00 后赎回。',
    maker_notice_2: '2.收益计算，做市商在进入市商池后的第一个整点开始累积做市收益，已累积收益可实时领取。',
    maker_notice_3: '3.因做市商池存入比例受市场因素影响，存在瞬时变化的可能，实际存入数量会以实际存入为准，多余的部分将自动返还到做市商预存池中。 做市商详细规则见',
    maker_notice_link: '做市商规则',
    about_swap_title: 'PZASWAP 闪兑说明',
    about_swap_content: `
      <span>PZASWAP 采用的是以太坊上的 UNISWAP 恒定乘积做市商模型，该协议下的交易对不使用外部喂价，交易对价格完全取决于市商池内的两个币种的数量比 。</span>
      <br/>
      <br/>
      <span>以 EOS/USDE 交易对为例，</span>
      <br/>
      <br/>
      <span>该交易对的即时价格  = 市商池 USDE 数量 /  市商池 EOS 数量</span>
      <br/>
      <br/>
      <span>注意，即时价格不是用户的实际交易价格，实际交易价格取决于用户发起交易的实际大小，</span>
      <br/>
      <br/>
      <span>此处的交易则引入恒定乘积概念。</span>
      <br/>
      <br/>
      <span>市商池 USDE 数量 * 市商池 EOS 数量 = 恒定乘积</span>
      <br/>
      <br/>
      <span>在交易前后，市商池内的 USDE 与 EOS 数量因为闪兑转账的发生而产生改变，但根据系统定义，闪兑交易的发生不改变恒定乘积的数值。</span>
      <br/>
      <br/>
      <span>即，</span>
      <br/>
      <br/>
      <span style='padding-left: 12px;'>闪兑前市商池 USDE 数量 * 闪兑前市商池 EOS 数量 </span>
      <br/>
      <span>= 闪兑后市商池 USDE 数量 * 闪兑后市商池 EOS 数量</span>
      <br/>
      <span>= 恒定乘积</span>
      <br/>
      <br/>
      <span>又有，</span>
      <br/>
      <span>闪兑后市商池 USDE 数量 = 闪兑前市商池 USDE 数量 + 用户转入的 USDE 数量</span>
      <br/>
      <span>闪兑后市商池 EOS 数量 = 闪兑前市商池 EOS 数量 - 用户取走的 EOS 数量</span>
      <br/>
      <br/>
      <span>联合可得，</span>
      <br/>
      <span>用户取走的 EOS 数量 = 闪兑前市商池 EOS 数量 - 恒定乘积 /（闪兑前市商池 USDE 数量 + 用户转入的 USDE 数量）</span>
      <br/>
      <br/>
      <span>所以,</span>
      <br/>
      <span>实际交易价格 = 用户转入的 USDE 数量 / 用户取出的 EOS 数量</span>
      <br/>
      <br/>
      <span>= 用户转入的 USDE 数量 /（闪兑前市商池 EOS 数量 - 恒定乘积 /（闪兑前市商池 USDE 数量 + 用户转入的 USDE 数量））</span>
      <br/>
      <br/>
      <span>交易完成后市场形成新的即时价格，</span>
      <br/>
      <br/>
      <span>交易完成后的即时价格 = 闪兑后市商池 USDE 数量 / 闪兑后市商池 EOS 数量 </span>
      <br/>
      <br/>
      <span>关于交易大小将对价格产生怎样的影响，我们设定</span>
      <br/>
      <br/>
      <span>溢价率 =  实际交易价格 / 闪兑前即时价格</span>
      <br/>
      <br/>
      <span>则根据推算，溢价率的大小将基于交易币数占市商池币数的比例。</span>
      <br/>
      <br/>
      <span>假设市商池内有 1000 USDE，此时某用户发起一笔 10 USDE 的买单，则无论此时的即时价格是多少，溢价率 = 10 / 1000  = 1%。</span>
      <br/>
      <br/>
      <span>溢价率 = 交易的 USDE 数 / 闪兑前市商池 USDE 数量</span>
      <br/>
      <br/>
      <span>最后划重点，在市商池有限的情况下，用户应避免在本闪兑模型里进行大额交易。</span>
    `,
    about_maker_title: '闪兑做市商规则简易说明',
    about_maker_content: `
    PZASWAP 采用的是以太坊上的 UNISWAP 恒定乘积做市商模型，该协议下的交易对不使用外部喂价，交易对价格完全取决于市商池内的两个币种的数量比 。
    <br/>
    <br/>
    市商池与 MMF
    <br/>
    <br/>
    做市资金参与做市系统时必须按照系统当时的代币比例，又称即时价格，进入市商池。
    <br/>
    <br/>
    假设此时市商池内存有 100 USDE 与 10 EOS，则新入的市商资金必须以 10 ： 1 的比例存入 USDE 与 EOS。
    <br/>
    <br/>
    做市商将 EOS 与 USDE 按比例存入市商池内后，做市行为正式开始。该存入比例以实时市商池比例为准。假设此时市商池内的 USDE 对 EOS 比例为 10 ：1，且用户发起一笔 100 USDE 与 10 EOS 的市商存款，但在发起转账申请与实际完成之间的授权过程中，市商池内的交易对比例发生变化（可能是由于有一笔闪兑交易恰好发生），则系统采用最新比例，并自动取最近似的资金数量进行资金存入。
    <br/>
    <br/>
    以上方数值为例，市商池内的交易对比例从 10 ：1 变至 9 ：1，则市商存入的 100 USDE 与 10 EOS 不会被完全接受，而是 存入 90 USDE 与 10 EOS，多余的 10 USDE 将转回原转账账户中。
    <br/>
    <br/>
    成功完成存入操作之后，做市商将获得 MMF 作为市商资金的存入凭证。<br/>
    第一个参与做市的做市商作为初始参与者，将获得与存入USDE 数额等量的 MMF。<br/>
    下一笔存入的市商资金可获得的 MMF 取决于存入资金占原先市商池价值的比例。<br/>
    <br/>
    <br/>
    以下是关于根据 MMF 进行存取操作的具体描述。
    <br/>
    <br/>
    市商池资金的存入
    <br/>
    <br/>
    存入资金占比 = 存入 USDE 数量 / 存入前市商池 USDE 数量
    <br/>
    <br/>
    新铸 MMF 数量 = 存入前 MMF 数量 * 存入资金占比
    <br/>
    <br/>
    即，下一笔做市资金可获得的 MMF 数量 = 下一笔存入资金中的 USDE 数量 / 市商池内已有的 USDE 数量 * 已生成的 MMF 数量。
    <br/>
    <br/>
    市商池资金的提现
    <br/>
    <br/>
    做市商以 MMF 为凭证，提现相应份额的市商资金。偿还的 MMF 由系统销毁。
    <br/>
    <br/>
    提现资金占比 = 偿还 MMF 数量 / 偿还前 MMF 总数量
    <br/>
    <br/>
    提现 EOS = 市商池现存 EOS 数量 * 提现资金占比
    <br/>
    <br/>
    提现 USDE = 市商池现存 USDE 数量 * 提现资金占比
    <br/>
    <br/>
    手续费
    <br/>
    <br/>
    每比交易收取一定比例以 USDE 计价的手续费。
    <br/>
    <br/>
    EOS/USDE 买方
    <br/>
    <br/>
    恒定乘积 = 池内 USDE 数量 * 池内 EOS 数量
    <br/>
    <br/>
    以 USDE 购买 EOS 时，
    <br/>
    <br/>
    已知支付 USDE 数量，
    <br/>
    <br/>
    购得 EOS 数量 = 池内 EOS 数量 - 恒定乘积 /（池内USDE 数量 + 支付USDE数量/（1 + 手续费率））
    <br/>
    <br/>
    手续费 = 支付 USDE 数量 /（1 + 手续费率）* 手续费率
    <br/>
    <br/>
    EOS/USDE 卖方
    <br/>
    <br/>
    出售 EOS 获得 USDE 时，<br/>
    已知支付 EOS 数量，
    <br/>
    <br/>
    购得 USDE数量 = （池内USDE数量 - 恒定乘积 /（池内EOS数量 + 支付EOS 数量））/（1 + 手续费率）
    <br/>
    <br/>
    手续费 = 购得 USDE 数量 * 手续费率<br/>
    =（池内USDE数量 - 恒定乘积 /（池内EOS数量 + 支付EOS 数量））/（1 + 手续费率）* 手续费率
    <br/>
    <br/>
    手续费分配
    <br/>
    <br/>
    与 PIZZA 质押奖励类似，系统每过一段时间读取用户的 MFF 持仓比例，并根据比例分配手续费。用户可自主申领收益，或在提现做市本金时自动完成申领操作。
    <br/>
    <br/>
    为避免频繁的提现动作对交易系统造成额外负担，系统采用类似 REX 的提现规则，以 UTC 零点作为初始计时点，做市资金存入后 3 日内无法提现，3 日后可自由提现。 即某做市商在 UTC 23 时进入池内，1 小时后完成第一日冻结期。
    `,
    maker_transaction_history: '存提记录',
    maker_withdraw_history: '取出记录',
    maker_profit_amount: '收益数量',
    maker_confirm_withdraw: '确认提现',
    maker_confirm_deposit: '确认存入',
    maker_max_withdraw: '最多可提现',
    maker_max_deposit: '最多可存入',
    maker_confirm_withdraw_to_bank: '确认取出',
    maker_max_withdraw_to_bank: '最多可取',
    swap_price_tip: (value, symbol) => {
      return `你将以 ¥ ${value} ，兑换到 ${symbol}`
    },
    operate_success: '操作成功',
    maker_withdraw_tip: '可取出数量与当前比例有关',
    maker_invest_title: '投入做市商池',
    maker_specification: '做市商规则',
    maker_mobile_invest: '立即投入',
    auto_market_maker: '自动做市商',
    hl_swap_title: '去中心化闪兑',
    hl_swap_content: '去中心化，一键闪兑',
    hl_auction_title: '拍卖抢单',
    hl_auction_content: '抢拍赚取 EOS 差价',
    hl_maker_title: '做市商',
    hl_maker_content: '共建共享 USDE 生态繁荣',
    hl_usde_finance_title: 'USDE 理财',
    hl_usde_finance_content: '安全理财 低风险',
    input_range_warning: '请输入正确的数量',
    input_min_warning: (symbol, value) => {
      return `${symbol} 数量必须 >= ${value}`
    },
    input_max_warning: (symbol, value) => {
      return `${symbol} 数量必须 <= ${value}`
    },
    usable_balance_warning: (symbol) => {
      return `${symbol}数量不足`
    },
    dex_favorite: '自选',
    dex_usde: 'USDE',
    dex_eos: 'EOS',
    dex_plvt: '杠杆',
    dex_trading_pair: '交易对',
    dex_newest_price: '最新价',
    dex_change: '涨幅',
    dex_high: '最高价',
    dex_low: '最低价',
    dex_vol_for_24h: '24H 量',
    dex_amount_for_24h: '24H 成交额',
    dex_more: '查看更多',
    dex_market: '行情',
    dex_exchange: '币币交易',
    free_cpu: '免CPU操作',
    announcement: 'PIZZA-USDE平台现全平台支持免cpu操作，每个账户每天限10次',
    merge: '合并',
    position_merge: '合并仓位',
    boom: '爆仓',
    withdraw: '解押',
    add_pledge: '质押',
    sub_pledge: '取回',
    add_dollar: '生成',
    sub_dollar: '偿还',
    add_pledge_placeholder: '你想增加的EOS数量',
    sub_pledge_placeholder: '你想取回的EOS数量',
    add_dollar_placeholder: '你想生成的的USDE数量',
    sub_dollar_placeholder: '你想偿还的的USDE数量',
    add_pledge_tip: '可用数量',
    sub_pledge_tip: '最多可取回',
    add_dollar_tip: '最大可生成',
    sub_dollar_tip: '最大可偿还',
    create_pledge: '创建仓位',
    create_new_pledge: '新建仓位',
    create_pledge_tip: '您还未创建仓位',
    create_pledge_desc: '创建仓位生成USDE，获得治理币PIZZA奖励',
    create_pledge_desc2: '质押EOS，生成USDE，获得治理币PIZZA奖励',
    position_num: '仓位总数',
    my_position: '我的仓位',
    my_eos_collateral: '质押中EOS总量',
    my_usde_amount: '已生成USDE总量',
    my_reward_pizza_amount: '累计PIZZA奖励数量',
    position_list: '仓位列表',
    position_history: '历史仓位',
    position_id: '仓位ID',
    create_time: '创建时间',
    finish_time: '平仓时间',
    close_price: '平仓价格',
    adjustment_detail: '调整仓位',
    more: '查看',
    adjustment: '调仓',
    pledge_system_info: '质押生成系统概况',
    pledge_eos_validate_msg: 'EOS数量需大于或等于 1.0000 EOS',
    create_pledge_eos: '质押 EOS',
    create_pledge_usde: '生成 USDE',
    your_pledge_eos_amount: '你想质押的EOS数量',
    your_pledge_usde_amount: '你想生成的USDE数量',
    max: '最大',
    ratio_tip: '请填入10-70数字',
    ratio_change_tip: '改变质押率将影响你生成的 USDE 数量',
    normal_ratio: '标准质押率',
    high_ratio_tip: '质押率过高，将导致强平风险过高',
    high_ratio_tip2: '质押率大于70%，将导致强平风险过高',
    back: '返回',
    position: '仓位',
    position_detail: '仓位详情',
    change_position_tip: '调仓数量需大于0',
    please_enter_position_amount: '请输入您要调仓的数量',
    add_pledge_amount_tip: '增加质押物 EOS 数量，降低强平风险',
    sub_dollar_amount_tip: '减少 USDE 生成数量，降低强平风险',
    change_position_history: '仓位历史变化',
    please_choise_merge_position: '请选择合并仓位',
    merge_position_eos_amount: '合并后EOS数量',
    merge_position_usde_amount: '合并后USDE数量',
    merge_position_tip: '选中的仓位将与当前仓位合并',
    choise: '选择',
    force_tip: '强平时的EOS预期价格，强平质押率为80%',
    ratio_desc: '债务价值/质押物价值',
    normal_ratio_desc: '创建账户时的最高初始质押率',
    sub_pledge_withdraw: '取回并解押',
    sub_pledge_withdraw_tip: '取回全部 EOS，即将该仓位解押',
    merging: '合并中',
    liquidated_msg: '该仓位已爆仓',
    or: '或',
    use_rules: "使用说明",
    please_use: "请使用",
    desktop_scatter: "桌面版Scatter",
    login_tip: "导入EOS账户时，请选择@active账户。",
    wallet_support: "现已支持钱包",
    wallet_version_tip: "版本号至少为",
    download: "下载",
    version_notes: "版本说明",
    login_success: "登录成功",
    operation_fail: "操作失败",
    qr_trans_tip: "扫描二维码完成交易",
    account_name: "账户名",
    tips: "温馨提示",
    scan_qr_tip1: "当前您使用的是扫码登录，暂不支持该操作。",
    scan_qr_tip2: "可使用钱包 DApp 进行操作，或使用scatter登录进行操作。",
    search: "搜索",
    swap_input_symbol_tip: "请输入你想要兑换的币种",
    more_functions_tip: "更多应用敬请期待",
    pizza_swap_tip: "基于恒定乘积自动做市商模型，市场上最彻底的去中心化闪兑",
    maker_my_reward: '我的收益',
    my_maket_maker: '我的做市商',
    maket_maker_total_pool: '当前做市商池',
    maket_maker_my_pool: '我的做市商池',
    maket_maker_total_pool_amount: '当前做市商池大小',
    maket_maker_my_pool_amount: '我的做市商池大小',
    maket_maker_ratio: '占比',
    maket_maker_withdraw_amount: '取出数量',
    maket_maker_invest: '投入做市商',
    maket_maker_invest_record: '投入记录',
    tab_pledge: '质押',
    tab_swap: '闪兑',
    tab_exchange: '交易',
    set_code_tip: '请填入邀请码',
    activity_code_label: '本活动已绑定邀请码',
    set_code_text: '设置邀请码',
    set_code_tip2: '邀请码只能设置一次，设置后不能修改',
    set_code_btn: '确认设置',
    set_code_please: '请填入邀请码',
    activity_today_transaction: '今日交易量',
    activity_today_rank: '今日排名',
    activity_total_rank: '综合排名',
    activity_total_transaction: '综合交易量',
    activity_my_invite_transaction: '我的邀请加成',
    activity_my_invite_code: '我的邀请码',
    activity_gen_invite_pic: '生成邀请海报',
    activity_list: '查看榜单',
    activity_invite_num: '邀请人数',
    activity_today_total_transaction: '单日累计交易额',
    activity_reward: '奖励',
    activity_can_receive: '即可领取',
    otc_tip: 'USDE法币交易请前往 morecoin.com',
    activity_time: '活动时间',
    activity_last_update_time: '上次更新时间',
    activity_last_update_tip: '数据将每小时进行一次更新',
    activity_today_top: '当日交易量冠军',
    activity_username: '用户名',
    activity_invite_transaction: '邀请加成',
    activity_pizzaswap: 'PIZZASWAP交易大赛',
    activity_today_list: '今日排行',
    activity_total_list: '综合排行',
    activity_will_start: '活动即将开始',
    activity_top_tip: (symbol) => {
      return `单日冠军将获得 88 EOS 奖励`
    },
    activity_reward_tip: (amount, reward) => {
      return `单日累计交易额 ${amount} 即可领取 ${reward} 奖励`
    },
    under_construction: '升级维护中',
    plvt: "杠杆代币",
    products: '产品',
    generate_info: '获得 USDE 稳定币，质押即挖矿，稳定享受 PIZZA 奖励',
    pizza_info: 'PIZZA 金融网络上的原生态去中心化交易所',
    lend: '借贷',
    lend_info: '去中心化借贷平台',
    deposit: '存款',
    borrow: '贷款',
    market_overview: '市场概况',
    lend_market: '市场',
    vault: '金库',
    dec_lending: '去中心化借贷',
    dec_lending_info: 'PizzaLend 是一种去中心化的非托管货币市场协议，用户可以在其中充当存款人或贷款人。存款人向市场提供流动性以赚取被动收入，借款人能够以超额质押进行无限期贷款。',
    current_market_size: '当前市场总价值',
    remaining_position: '仓位剩余',
    bid_info: '拍卖信息',
    market_size: '市场总额',
    total_lending:'借贷总额',
    total_deposit: '存款总额',
    apy: '存款年利率',
    apr: '贷款年利率',
    collateralize: '用作质押物',
    deposit_portfolio: '存款组成',
    lend_withdraw: '取出',
    on: '开',
    off: '关',
    total_borrow: '贷款总额',
    health_factor: '健康因子',
    total_collateral: '质押物总额',
    add_collateral: '增加质押物',
    post_deposit_health_factor: '存款后健康因子',
    post_withdrawal_health_factor: '取出后健康因子',
    post_borrow_health_factor: '贷款后健康因子',
    post_repay_health_factor: '偿还后健康因子',
    post_deposit_info: '请选择增加质押物币种',
    borrowable: '可贷总额',
    repay: '偿还',
    lend_history: '历史记录',
    deposite_withdraw_histpry: '存取记录',
    borrow_repay_histpry: '贷还记录',
    deposite_amount: '存入数量',
    usage: '使用率',
    current_circulating: '当前可流通总量',
    whether_collateralizable: '是否可用作抵押',
    max_ltv: '最高质押率',
    liquidation_rate: '清算门槛',
    liquidation_bonus: '清算奖金',
    historical_apy: '历史存款年利率',
    historical_apr: '历史贷款年利率',
    max_withdraw_amount: '最多可取出数量',
    total_borrowed: '已贷款总额',
    borrow_amount: '贷款数量',
    repay_amount: '偿还数量',
    max_borrow_amount: '最多贷款数量',
    safe: '安全',
    dangerous: '危险',
    current_debt: '当前需要偿还数量',
    yes: '是',
    no: '否',
    must_choose: '需先设置质押物，才可进行贷款',
    choose_collateral: '前往设置',
    collateral_activated: '开启成功',
    collateral_disabled: '关闭成功',
    insufficient_balance: '账户余额不足',
    collateral_added: '增加成功',
    deposit_succeeded: '存款成功',
    withdrawal_succeeded: '取款成功',
    amount_required: '请输入数量',
    repay_succeeded: '还款成功',
    borrow_succeeded: '贷款成功',
    bid_succeeded: '拍卖成功',
    min_withdraw_amount: (symbol)=>{
      return `${symbol} 小于最小取出数量0.0001，无法取出`
    },
    minimum_loan_amount: '最小贷款数量0.05',
    pizzalend_rules: '借贷规则'
  },
  EN: {
    type: 'EN',
    home: 'Home',
    login: 'Login',
    wallet_login: 'Wallet scan QR code login',
    logout: 'Sign out',
    generate_usde: 'Generate',
    swap_nav_title: 'USDE Ecosystem',
    white_paper: 'White Paper',
    pizza_dex: 'PIZZA DEX',
    pizza_dex_title: 'Decentralized Exchange',
    pizza_usde:'PIZZA-USDE',
    pizza_usde_enter: 'A Decentralized Financial Gateway',
    base_eos: 'EOS Based',
    base_eos_info: 'Efficient, instant transaction, more diversified',
    decentralized_trading: 'Decentralized Trading',
    decentralized_trading_info: 'No registration, no deposit/withdraw.',
    trusted_transaction: 'Trusted Transaction',
    trusted_transaction_info: 'On-chain, transparent and traceable.',
    decentralized_issuance: 'Decentralized Issuance',
    issuance_with_collateral: 'Transparent and collateral backed asset issuance',
    usde_system: 'USDE System',
    usde_system_title: 'The system uses smart contracts to generate USDE stablecoin.With conservative collateralization ratios,<br/>the system neutralizes the potential crisis of confidence and allows the stablecoin to 1:1 peg to USD.',
    usde_system_slogn: 'Decentralized issuers, transparent and flexible, high performance and real-time settlements - a collateral backed stablecoin ecosystem with real multi-layer financial use cases.',
    usde_system_pledge: 'EOS Collateralization',
    usde_system_pledge_info: 'Issue Stablecoin USDE, reward PIZZA token',
    usde_system_bid: 'USDE Stablecoin',
    usde_system_bid_info: 'Bid EOS with discounted price',
    usde_system_pizza: 'PIZZA Governance Token',
    usde_system_pizza_info: 'Participate community governance, voting power.',
    usde_partners: 'Partners',
    join_us: 'Join Community',
    change: 'Change',
    high: 'High',
    low: 'Low',
    day_h_vol: '24h Vol/EOS',
    price: 'Price',
    price_index: 'Price Index',
    day_price_index: '24h Price Index',
    eos_collateral: 'EOS Collateral',
    circulating_usde: 'Circulating USDE',
    overall_CR: 'Overall LTV',
    avg_CR: 'Avg.LTV (%)',
    current_CR: 'Current LTV',
    minimum_CR: 'Min.LTV',
    penalty: 'Penalty',
    maintenance_CR: 'Liqdt.LTV',
    current_CDP: 'Current CDP',
    redeemed_CDP: 'Redeemed CDP',
    eos_amount_z: 'Amount(EOS)',
    eos_amount_j: 'Amount(EOS)',
    ratio: 'Ratio (%)',
    new_ratio: 'Ratio',
    usde_amount: 'Amount(USDE)',
    cycle: 'Cycle',
    reward: 'PIZZA Reward',
    create_CDP: 'Create CDP',
    create_CDP_info: 'Pledge EOS to create CDP and generate USDE stablecoin. ',
    desired_collateral_amount: 'Desired Collateral Amount',
    the_value_must_be_larger_or_equal_to_1: 'The EOS amount must be larger or equal to 1',
    desired_usde_amount: 'Desired USDE Amount',
    expected_liquidation_price: 'Expected Liquidation Price:',
    liquidation_price: 'Liqdt.Price',
    new_liquidation_price: 'Liqdt.Price',
    pledge_tab: 'Pledge',
    confirm_pledge: 'Confirm Pledge',
    choose_order_redeem: 'Please choose the order to redeem',
    last_num_days: 'has lasted {variable} d',
    each_cycle_last_days: 'Each Reward Cycle Lasts 14 days',
    each_cycle_last_days_info: 'Collateralization reward is an extra reward the system offers to support users’ pledge behaviors. All rewards will be distributed at a same day, every 14 days.',
    expected_cycle_reward: 'Expected Cycle Reward:',
    redeemable_amoumt: 'Redeemable Amoumt:',
    redeem_tab: 'Redeem',
    confirm_redeem: 'Confirm Redeem',
    account: 'My Asset Info',
    aggregate_asset: 'Total Asset',
    please_login_first: 'Please login first.',
    please_login_first_info: 'Please login first',
    reward_countdown: 'Reward',
    reward_countdown_info: 'The countdown of reward cycles is for the settlement of collateralization reward. Reward cycle will not affect the actual CDP operations, and all users will share the same timer. Please check out “Reward Mechanism“ for more information.',
    countdown: 'Countdown',
    redeem: 'Claim',
    token_portion: 'Collateral Proportion',
    eos_supply: '% EOS Supply',
    mined_pizza_token: '% Mined PIZZA Token',
    terminated: 'Active Orders',
    completed: 'Closed Orders',
    time_order: 'Time',
    order: 'Order',
    time: 'Time',
    collateral_amount: 'Collateral Amount',
    till_next_cycle: 'Till Next Cycle',
    status: 'Status',
    active: 'Active',
    redeemed: 'Redeemed',
    liquidating: 'CDP Liquidated',
    liquidated: 'Liquidated',
    reviewing: 'Reviewing',
    with_be_liquidated: 'Your current CDP at risk, CDP will be liquidated when ratio higher then 80%',
    whitepaper: 'Whitepaper',
    liquidation_mechanism: 'Liquidation Mechanism',
    liquidation_mechanism_info: `Loan to value ratio = collateral value / USDE generated<br/><br/>

    Users could collateralize their collateral assets in the system and generate USDE stablecoins in their collateralized debt positions (CDP).<br/><br/>

    The Required TLV is set to be 70% and the Maximum LTV is set  to be 80%. In other words, when users starts a CDP, they have to collateralize at least $1.43 of crypto-assets for every USDE they generate and each USDE token will at least be backed by $1.25 of crypto-collaterals.<br/><br/>

    If the LTV of a CDP raises to 80% or higher, a forced liquidation will be triggered. Due to market volatility, the specific liquidation price could be lower than the expected value.<br/><br/>

    And,<br/><br/>

    Expected Liqdt. Price =  USDE Value / Liquidt. LTV / Collateral Amount<br/><br/>

    When a position breaches the maintenance level (80%), the system's core contract will determine that a liquidation has happened. The system will take away a portion of the collateral that's equivalent to a% of the USDE debt.<br/><br/>

    In the meantime, the system will also send a portion of collaterals taht's enough to cover the USDE debt in the position, along with b% of the default collaterals as a Liquidator Bonus, to the liquidation smart contract. Liquidators could pay off the USDE debt in the liquidated position and receive corresponding amount of collaterals. After the deduction, the rest of the collateral will be sent back to the one who owns the default position.<br/><br/>

    Liquidated Collateral = (1 + b%) * USDE Debt / Actual Liquidation Price<br/><br/>

    Bid Profit = Liquidated Collateral * Current Collateral Price / USDE Debt - 1<br/><br/>

    The amount of collaterals and USDE in each liquidation bidding order are always fixed, and USDE price is usually constant, thus the Liquidation Bonus changes solely based on the collateral price movements. When market stumbles, liquidity is usually limited; If the expected bid profit ratio drops to c% or lower, a system liquidator will cover the USDE debt and take away the collateral.<br/><br/>

    Therefore，when Liquidator Bonus <= c% * Original Collateral Amount * Actual Liquidation Price, a system liquidator will participate the liquidation.<br/><br/>

    Under the current system setup, a = 0, b =6, c = 1.5. When a liquidation is triggered, the initial bidding profit is usually 6%.`,

    reward_mechanism: 'Reward Mechanism',
    reward_mechanism_info: `From <span>05/01/2019</span> (Wed) to <span>05/24/2022</span> (Tue), a total amount of 10 millions PIZZA tokens will be mined among 160 weeks, which is roughly 3 years. Below is the details about this incentive plan.<br/>(In case of any discrepancy or inconsistency between this document and latest announcements on <span>PIZZA.LIVE</span>, the announcements on <span>PIZZA.LIVE</span> shall prevail.)<br/><br/><p>1. Collateralization Reward</p><span>Amount of Collateralization Reward: </span>10,000,000 PIZZA Token, which is euiqvalent to 1% of the total PIZZA supply.<br/><br/><span>Reward Cycle: </span>the 160 weeks of Reward Cycle includes 4 phases, each shares 50%, 25%, 12.5% and 6.25% of the total reward pool, therefore 5 millions, 2.5 millions, 1.25 millions and 0.625 million of PIZZA reward. The 4 phases will in total accumulate 93.75% of the overall reward and has 6.25% left, this part of PIZZA reward will be left for the community to decide its specific usage when the time comes.Users are allowed to claim the reward at any time.<br/><br/><p>2. Snapshot</p>The system snapshots all the CDPs in the collateral pool in each hour.<br/><br/><p>3. Reward formula</p><span>Total PIZZA Released Per Snapshot = Total Collateralization Reward * Weight of Current Halving Phase / Hour Number of Current Halving Phase</span><br/><br/><span>Reward Ratio = W1 * EOS Amount in a single CDP / Total EOS + W2 * USDE Amount in a single CDP / Total USDE</span><br/><br/><span>W1 and W2 are the weighted ratios for EOS and USDE in the above reward formula.</span><br/><br/><span>W1 + W2 = 1</span><br/><br/><span>Claimable PIZZA Reward in a Snapshot = Total PIZZA Claimable in Current Snapshot * Reward Ratio</span><br/><br/><span>Number of Claimable PIZZA = (Snapshot 1 + Snapshot 2 + Snapshot 3...snapshot n)</span><br/><br/><span>Snapshot_n : The number of PIZZA that the CDP holder obtained in the nth snapshot.</span><br/><br/>* The first halving phase will be divided into 2 parts, each part shares 25% of the 10 millions PIZZA reward. This design is intended to encourage early participants.<br/><br/>Example:<br/>Suppose that during the second halving phase (25% of the total reward), users collateralized 500 EOS and generated 200 USDE, where Bob collateralized 100 EOS and generated 100 USDE, Alice collateralized 400 EOS generated 100 USDE. Since it is currently the second halving phase, so:<br/><br/><span>Total Claimable PIZZA Per Snapshot = 10,000,000 * 25% / (40 * 7 * 24) = 372.0238 PIZZA</span><br/><br/><span>254.0238 * 24 * 14 = 125,000 PIZZA</span><br/><br/><span>Bob's Reward Ratio in Each Snapshot = W1 * 100/500 + W2 * 100/200</span><br/><br/><span>Alice's Reward Ratio in Each Snapshot = W1 * 400/500 + W2 * 100/200</span><br/><br/>Scenario 1: Current W1 = 0, W2 = 100%, then Bob and Alice each receive 50% of the reward.<br/>Scenario 2: Current W1 = 50%, W2 = 50%, then Bob receives 35% of the reward, and Alice gets 65%.<br/><br/>Assuming we adopt the W1 and W2 values of Scenario 2, along with the Reward Ratios. Bob accumulated a total of 125,000 * 35% = 43,450 PIZZA in 336 snapshots over the two weeks period.<br/><br/><span>Alice accumulates 125,000 * 65% = 81,250 PIZZA in 336 snapshots over the two weeks period.</span><br/><br/>*Users can actually claim the reward at any time, the above scenario just pretends both users accidentally claim the reward at the same time.<br/><br/>Current setup:<br/><br/><span>W1 = 0, W2 = 100%.</span><br/><br/>`,
    terms_of_service: 'Terms of Service',
    terms_of_service_info: '<p>Statement</p>These terms are an agreement on the relationship of rights and obligations between you and the service provider <span>PIZZA.LIVE</span> in connection with the use of any services provided by <span>www.pizza.live</span>. Please read carefully before using our services and confirm that you understand the relevant regulations. By authorizing login, you agree to all the terms of this agreement. If you have any objection, please stop using the relevant services immediately.If you have any questions about these terms, please contact our Customer service team <span>support@pizza.live</span>.<br/><br/><p>Authorized Login</p>All users are required to authorize login when using <span>PIZZA.LIVE</span>, the platform does not save any user information about security, under certain conditions, the Platform reserves the right to refuse to trade for your pledge.<br/>Dispute resolution <span>PIZZA.LIVE</span> reserves the right to resolve disputes. This includes the handling of violations of the rights of others by users, violations of laws and regulations, unusual transactions, and other related issues not explicitly mentioned in the terms.<br/>users agree to bear the costs incurred in the dispute resolution process <span>PIZZA.LIVE</span>.<br/><br/><p>Service Usage Guidelines</p>During the use of the <span>PIZZA.LIVE</span> service, you agree to abide by the following agreements:<br/>1. All activities during the use of the <span>PIZZA.LIVE</span> service comply with the requirements of laws and regulations and the rules for the use of pizza.live.<br/>2. Do not violate the public interest, public morals and other legitimate rights and interests.<br/>3. Do not evade tax and do not violate this agreement and the relevant provisions.<br/><br/>In the event of a breach of the above commitments and the consequent legal consequences, you will be solely responsible for all legal liabilities and for the costs of litigation and claims arising from <span>PIZZA.LIVE</span> for such irregularities. No data or information displayed on this platform may be used for commercial purposes without the written consent of <span>PIZZA.LIVE</span>. Do not take the act of unfair competition, and do not attempt to interfere with the normal operation of <span>PIZZA.LIVE</span>.<br/><br/>Such malicious acts include, but are not limited to:<br/>Use equipment, software or programs to interfere with websites;<br/>Unreasonable data loading request leads to overload of network equipment;<br/>Buy and sell maliciously on the market. By using <span>PIZZA.LIVE</span>, you agree that <span>PIZZA.LIVE</span>, without prior notice, has the right to unilaterally determine whether you have violated any of the above agreements and to take actions that include, but is not limited to:<br/>1. Block and close order requests;<br/>2. report incidents to the authorities;<br/>3. release alleged violations and actions taken to the public;<br/>4. delete violation information that you publishes. <br/><br/>If your violation causes any loss to a third party, you should assume all legal liability in your personal capacity and ensure that <span>PIZZA.LIVE</span> is protected from such losses as fines or additional charges.<br/>If, as a result of any loss caused by your violation, a third party seeks compensation or is subject to administrative penalties resulting to <span>PIZZA.LIVE</span>, you will bear the loss, including attorneys\' fees.<br/><br/><p>Service Fee</p><span>PIZZA.LIVE</span> reserves the right to levy a service charge to the user, which is currently free of service charge.<br/><br/><p>Terms of Service</p><span>PIZZA.LIVE</span> will not provide any written assurance as to the reliability, stability, accuracy and completeness of the technology provided by the services. <span>PIZZA.LIVE</span> will only be used as a trading platform, with access to information related to digital currencies and trading practices related to digital currencies. PIZZA.LIVE has no control over the quality, security and legality of digital currencies, as well as the authenticity of transaction information or the ability of the parties to the transaction to perform the rules.<br/>Therefore, before using the services, you must carefully consider investment risks, transaction information and the legality and effectiveness of investment decisions.<br/><br/><p>Scope of Responsibility</p>You agree that <span>PIZZA.LIVE</span> will not be liable for any loss caused by any of the following events, including, but not limited to:<br/>1. Profit;<br/> 2. goodwill;<br/> 3. data loss or any other intangible loss;<br/> 4. use <span>PIZZA.LIVE</span> services or fail to use <span>PIZZA.LIVE</span> service.<br/><br/><span>PIZZA.LIVE</span> is not responsible for losses caused by service failures or delays caused by external factors such as regular network maintenance or power failure, natural disasters, service provider issues, or government actions.<br/>Compensation In the event of any breach of this agreement, or in your use of <span>PIZZA.LIVE</span> services, you violate the relevant laws, regulations or the interests of third parties.<br/><br/>You agree to indemnify <span>Pizza.live</span> and its affiliates, contractors, licensors and their respective directors, officers, employees and agents from claims and damages (including attorneys\' fees, fines or fines imposed by regulatory bodies).<br/><br/><p>Termination of agreement</p>You agree that <span>PIZZA.LIVE</span> has the right to immediately freeze or lock the funds associated with your personal account and to suspend your access to <span>PIZZA.LIVE</span>when we suspect that you are in violation of the terms of service, the privacy policy, the anti-Money Laundering/CTF Act or any relevant laws and regulations. <span>PIZZA.LIVE</span> reserves the right to retain and use transaction data and all information related to such accounts.<br/>The same applies in the following cases:<br/>1. the account is affected by a criminal investigation or other pending proceedings;<br/>2. abnormal activity in the account is detected;<br/>3. unauthorized access to the account is detected;<br/>4. receive an order from a court or regulatory body/Government agency.<br/><br/><span>PIZZA.LIVE</span> has the right to block access to your account and permanently terminate your access to <span>PIZZA.LIVE</span> when this occurs:<br/>If the account is suspended/closed by a third party organization as a result of fraud, anti-money laundering investigations or violations of the <span>PIZZA.LIVE</span> TERMS (for example, using <span>PIZZA.LIVE</span> for transactions in the sanctioned country), <span>PIZZA.LIVE</span> will hold full custody of the relevant user data to that third party organization.<br/><br/>Comply with local laws <span>PIZZA.LIVE</span> users are responsible for complying with local laws. Users have the responsibility and obligation to comply with local laws and regulations such as tax policies. <span>PIZZA.LIVE</span> and its users declare that their sources of funding are legal. <span>PIZZA.LIVE</span> will maintain cooperation with law enforcement agencies around the world and resolutely withhold, freeze, and terminate user accounts authorized or investigated by law, among other relevant. <br/><br/>If you have any complaints and feedback questions, please contact us in time <span>support@pizza.live</span>, thank you for your support!',
    contact_us: 'Contact Us',
    usde_system_framework: 'USDE SYSTEM FRAMEWORK',
    details: 'Details',
    less: 'Less',
    no_data: 'No Data',
    contribute: 'Contribute',
    coming_soon: 'Coming Soon',
    fiat_trading: 'Fiat Trading',
    system_verification: 'System Verification',
    bid: 'Bid',
    circulating: 'Circulating',
    liquidating_eos: 'Liquidating',
    avg_profit_margin: 'Avg. Profit Margin',
    pledge_depth: 'CDP Depth',
    liquidation_time: 'Liqdt.Time',
    order_number: 'Order#',
    profit_margin: 'Profit Margin',
    action: 'Action',
    bid_action: 'Bid',
    confirmation: 'Confirmation',
    collateral_remained: 'Collateral',
    all: 'All',
    confirm: 'Confirm',
    debt_remaind: 'Remaining Debt',
    auction_input_info: 'Please Enter the USDE Amount',
    available: 'Asset Available:',
    eos_receivable: 'EOS Receivable:',
    warning: 'Warning',
    margin_warning: 'Margin Warning',
    bidded: 'Bidded',
    bid_time: 'Bid Time',
    fee: 'Paid (USDE)',
    get_eos_amount: 'Bid (EOS)',
    claiming_reward: 'Claiming Reward',
    creating_order: 'Creating Order',
    redeeming: 'Redeeming',
    introduction: 'Introduction',
    get_more_reward: 'Generate more USDE to raise your reward size',
    asset: 'Asset',
    build_community: 'Build PIZZA-USDE Community together',
    max_pledge: 'Max.',
    my_CDP: 'My CDP',
    USDE_issuance: 'USDE Issuance',
    risky_CDP: 'Risky CDP',
    reward_rules: 'Reward Rules',
    bid_oder: 'Bid Oder',
    historical_avg_profit: 'Historical Avg.Profit',
    my_asset: 'My Asset',
    asset_token: 'Token',
    asset_available: 'Available',
    asset_Frozen: 'Frozen',
    asset_estimated_eos: 'Estimated (EOS)',
    asset_estimated_cny: 'Estimated (CNY)',
    asset_estimated_usde: 'Estimated (USDE)',
    asset_action: 'Action',
    trade: 'Trade',
    estimated: 'Estimated',
    warning_eos_total: 'EOS Total: ',
    // 闪兑
    swap_ecosystem: 'Ecosystem',
    swap_title: 'PZASWAP',
    swap_desc: 'The actual swap ratio and token received are subject to market fluctuation',
    swap_send: 'Send',
    swap_get: 'Get',
    swap_swap_now: 'Swap',
    swap_all: 'All',
    swap_enter: 'Enter',
    swap_available: 'Available',
    swap_history: 'Swap history',
    swap_rules: 'Rules',
    swap_time: 'Time',
    swap_cancel: 'Close',
    swap_close: 'Close',
    swap_fee_fn: fee => {
      return `Fee: ${fee}, Pay with USDE`
    },
    swap_fee: 'Fee',
    market_maker: 'Market Maker',
    maker_total_reward: 'Profit',
    maker_bank: 'Market Maker Bank',
    maker_deposit: 'Deposit',
    maker_withdraw: 'Withdraw',
    maker_making_fund: 'Market Making Fund',
    maker_current_ratio: (value, symbol = 'USDE') => `Current Ratio（${toUpper(symbol)} : EOS = ${value}）`,
    maker_invest: 'Invest',
    maker_desc: 'To minimize the market influence to the actual deposit ratio,users have to deposit their EOS and USDE in Market Maker Bank,then transfer EOS and USDE to market maker fund under a certain ratio.',
    maker_overall_balance: 'Overall Balances',
    maker_profit: 'Market Making Profit',
    maker_withdraw_to_bank: 'Withdraw',
    maker_claim_reward: 'Collect',
    maker_notice_title: 'Notice',
    maker_notice_1: '1. Invested tokens will be available to withdraw in 3 days. Each time passing UTC 00:00:00 counts as 1 day.',
    maker_notice_2: '2.Market makers start accumulating their profits at next hour to the enter time; accumulated profits could be claimed in real time.',
    maker_notice_3: '3.The actual deposit ratio is subject to realtime market price, residuals caused by market adjustments will be sent back to the original deposit account.',
    maker_notice_link: 'Rules',
    maker_transaction_history: 'Transaction history',
    maker_withdraw_history: 'Withdraw history',
    maker_profit_amount: 'Profit',
    maker_confirm_withdraw: 'Confirm',
    maker_confirm_deposit: 'Confirm',
    maker_max_withdraw: 'Available:',
    maker_max_deposit: 'Available:',
    maker_confirm_withdraw_to_bank: 'Confirm',
    maker_max_withdraw_to_bank: 'Available:',
    swap_price_tip: (value) => {
      return `The expected price is $ ${value}`
    },
    operate_success: 'Success',
    maker_withdraw_tip: 'The actual amount will be based on the realtime exchange ratio',
    about_swap_title: 'An Introduction to PZASWAP ',
    about_swap_content: `
      <span>PZASWAP adopts the "Constant Product Market Maker Model" from UNISWAP, an Ethereum-based automated market maker. The model functions without any third party price feed, as the prices, or exchange ratios, are simply based on the realtime amounts of each token.  In this case, market makers no longer have to create an order book. Instead, all they need to do is to deposit or withdraw theird tokens in the market making fund.</span>
      <br/>
      <br/>
      <span>We take EOS/USDE trade pair as an example,</span>
      <br/>
      <br/>
      <span>EOS/USDE Price  = Pooled USDE Amount /  Pooled EOS Amount</span>
      <br/>
      <br/>
      <span>Attention, a pre-trade price is not the same as an actual traded price, the actual traded prices depends on the size of the trades.</span>
      <br/>
      <br/>
      <span>And here it introduces the concept of constant product market maker model to descript how the size of the trades change the actual traded price. </span>
      <br/>
      <br/>
      <span>USDE Amount * EOS Amount = Constant Product </span>
      <br/>
      <br/>
      <span>It's called a constant product only because it's a product and it remains constant under certain circumstances.</span>
      <br/>
      <br/>
      <span>When a trade happens, one coin will be increased in the pool and the other will be decreased. </span>
      <br/>
      <br/>
      <span>Assume you are a buyer, when you pay 100 USDE and expect the system to send you EOS as return, the USDE input is known, so is the pre-trade exchange ratio. However, while </span>
      <br/>
      <br/>
      <span>USDE Amount * EOS Amount = Constant Product,</span>
      <br/>
      <br/>
      <span>It's actually </span>
      <br/>
      <br/>
      <span>Pre-trade USDE Amount * Pre-trade EOS Amount = Constant Product.</span>
      <br/>
      <br/>
      <span>Also we have,</span>
      <br/>
      <br/>
      <span>Post-trade USDE Amount * Post-trade EOS Amount = Constant Product.</span>
      <br/>
      <br/>
      <span>And,</span>
      <br/>
      <br/>
      <span>Post-trade USDE Amount = Pre-trade USDE Amount + Input USDE Amount</span>
      <br/>
      <br/>
      <span>Post-trade EOS Amount = Pre-trade EOS Amount - Output EOS Amount</span>
      <br/>
      <br/>
      <span>Thus we get a joint function,</span>
      <br/>
      <br/>
      <span>Output EOS Amount = Pre-trade EOS Amount - Constant Product / ( Pre-trade USDE Amount + Input USDE Amount)</span>
      <br/>
      <br/>
      <span>And we also have,</span>
      <br/>
      <br/>
      <span>Actual Traded Price = Input USDE Amount / Output EOS Amount</span>
      <br/>
      <br/>
      <span>= Input USDE Amount / (Pre-trade EOS Amount - Constant Product / ( Pre-trade USDE Amount + Input USDE Amount))</span>
      <br/>
      <br/>
      <span>As the trade is completed, we get a post-trade price,</span>
      <br/>
      <br/>
      <span>Post-trade Price = Post-trade USDE Amount / Post-trade EOS Amount </span>
      <br/>
      <br/>
      <span>So here it comes a question, what is the premium to be specifically?</span>
      <br/>
      <br/>
      <span>Premium rate  = Actual Traded price / Pre-trade Price</span>
      <br/>
      <br/>
      <span>Based on calculation, it's easy to conclude that the premium rate is based on the ratio between the size of the trade and the size of the market making fund. </span>
      <br/>
      <br/>
      <span>For example, </span>
      <br/>
      <br/>
      <span>If there are 1000 USDE in the liquidity pool, and a user delivers 10 USDE to swap to EOS. In this case, no matter what the current exchange ratio of the pool is, the premium ratio will be 10/1000 = 1%.</span>
      <br/>
      <br/>
      <span>Premium Rate = Trade USDE Amount / Pre-trade USDE Amount</span>
      <br/>
      <br/>
      <span>The bottom line is, do NOT create a large trade in this system when the size of the liquidity pool is limited.</span>
    `,
    about_maker_title: 'PZASWAP Market Maker',
    about_maker_content: `
    Users can become a PZASWAP market maker by depositing their funds into the liquidity pool under realtime exchange ratios. Transaction fee collected from traders will all be distributed to market makers proportion to the funds each of them contributes to the liquidity pools. No fee will be collected by the system. Funds deposited to the liquidity pool will be locked in for 2~3 days, market makers will be allowed to withdraw their fund at any time as the lock-in period ends.
    <br/>
    <br/>
    Liquidity pool
    <br/>
    <br/>
    Market makers have to deposit their funds to the liquidity pool uder realtime exchange ratios.
    <br/>
    <br/>
    Assuming there are 100 USDE and 10 EOS in the liquidity pools, then a market maker will have to deposit their fund in an exhchange ratio of 10 : 1.
    <br/>
    <br/>
    Continued from the above scenario, now the ratio is 10 : 1, and a user sends 100 USDE and 10 EOS to the liquidity fund. Assuming, at the moment the user is making the transaction but not yet signs the authorization, and a trade happens, therefore the realtime exchange ratio is changed. Let's say, from 10 : 1 to 9 : 1. In this case, the system will maximize the fund to deposit while still using the last exchange ratio.
    <br/>
    <br/>
    Therefore, the 90 USDE out of 100 USDE will be kept and 10 EOS is still 10 EOS. In this case, the final ratio will be 9 : 1. The other 10 USDE will be returned to the original sender account.
    <br/>
    <br/>
    After the deposit successed, the system will generate MMF to the market maker as a proof of deposit.
    <br/>
    <br/>
    The first market maker of the system will receive an amount of MMF that's equivalent to the amount of USDE they sent.
    <br/>
    <br/>
    The receivable MMF for the next depositor will be based on its proportion to the  existed liquidity pools.
    <br/>
    <br/>
    Below is the detailed description.
    <br/>
    <br/>
    Deposit of Fund
    <br/>
    <br/>
    %Deposited = Deposited USDE Amount / Pre-deposit USDE Amount
    <br/>
    <br/>
    Minted MMF Amount = Pre-deposit MMF Amount * %Deposited
    <br/>
    <br/>
    Therefore,
    <br/>
    <br/>
    MMF Receivable = USDE Deposited / Pre-deposit USDE Amount * Pre-deposit MMF Amount。
    <br/>
    <br/>
    Withdraw of Fund
    <br/>
    <br/>
    MMF, as a proof of deposit, decides how much fund can be withdrawn. The returned MMF will destroyed.
    <br/>
    <br/>
    %Withdrawn = Returned MMF Amount / Pre-return MMF Amount
    <br/>
    <br/>
    Withdrawn EOS Amount = Pre-withdraw EOS Amount * %Withdrawn
    <br/>
    <br/>
    Withdrawn USDE Amount = Pre-withdraw USDE Amount * %Withdrawn
    <br/>
    <br/>
    Fee
    <br/>
    <br/>
    Transaction fee will be charged in USDE, the amount is based on the size of the trades.
    <br/>
    <br/>
    EOS/USDE Buyer
    <br/>
    <br/>
    Key formula,
    <br/>
    <br/>
    Constant Product = Pooled USDE Amount * Pooled EOS Amount
    <br/>
    <br/>
    When a user is buying EOS with USDE,
    <br/>
    <br/>
    sent USDE amount is known，
    <br/>
    <br/>
    EOS Receivable = Pooled EOS Amount - Constant Product / (Pooled USDE Amount + USDE Sent/ (1 + Fee Rate))
    <br/>
    <br/>
    Fee = USDE Sent / (1 + Fee Rate) * Fee Rate
    <br/>
    <br/>
    EOS/USDE Seller
    <br/>
    <br/>
    When a user is selling EOS for USDE,<br/>
    Knowing Amount of EOS sent，
    <br/>
    <br/>
    USDE Receivable = (Pooled USDE Amount - Constant Product / (Pooled EOSAmount + EOS sent) ) / (1 + Fee Rate)
    <br/>
    <br/>
    Fee = USDE receivable * Fee Rate<br/>
    = (Pooled USDEAmount - Constant Product / (Pooled EOSAmount + EOS Sent) ) / (1 + Fee Rate) * Fee Rate
    <br/>
    <br/>
    Fee Distribution
    <br/>
    <br/>
    Similar to PIZZA Reward, the system reads users' MFF holding status to specify the fee distribution. Users can claim their profits, or automatically collect it when withdawing their principal.
    <br/>
    <br/>
    To avoid unnecessary withdraw actions and potential disruptions it could cause, the system adopts a withdraw rule similar to the REX rule.<br/>
    In this withdraw framework, the system sets UTC 0:00:00 as a starting point, any fund that goes in to the liquidity pools will be locked for 3 days and will be 100% free to go after the lock-in period. For example, if a market maker makes a deposit at UTC 23:00:00, then their fund will be locked for (24 - 23) + 48 = 49 hours, after this the fund could be withdrawn at any moment.
    `,
    maker_invest_title: 'Deposit',
    maker_specification: 'Specification',
    maker_mobile_invest: 'Deposit',
    auto_market_maker: 'Auto Market Maker',
    hl_swap_title: 'PZASWAP',
    hl_swap_content: 'Automated instant swap',
    hl_auction_title: 'Bid',
    hl_auction_content: 'Bid for discounted EOS',
    hl_maker_title: 'Market Maker',
    hl_maker_content: 'A market maker portal',
    hl_usde_finance_title: 'USDE Investment',
    hl_usde_finance_content: 'A low risk investment account',
    input_range_warning: 'The input must be within a proper range',
    input_min_warning: (symbol, value) => {
      return `${symbol} input must >= ${value}`
    },
    input_max_warning: (symbol, value) => {
      return `${symbol} input must <= ${value}`
    },
    usable_balance_warning: (symbol) => {
      return `${symbol} insufficient balance`
    },
    dex_favorite: 'Favorite',
    dex_usde: 'USDE',
    dex_eos: 'EOS',
    dex_plvt: 'Leveraged',
    dex_trading_pair: 'Trading Pair',
    dex_newest_price: 'Newest Price',
    dex_change: 'Change',
    dex_high: 'High',
    dex_low: 'Low',
    dex_vol_for_24h: '24H Vol.',
    dex_amount_for_24h: '24H Amount',
    dex_more: 'More',
    dex_market: 'Market',
    dex_exchange: 'Exchange',
    free_cpu: 'Free CPU',
    announcement: 'PIZZA - USDE Platform now waives the CPU cost in every PIZZA product. Each account gets 10 actions per day.',
    merge: 'Merge',
    position_merge: 'Merge position',
    boom: 'Liquidation',
    withdraw: 'Redeem',
    add_pledge: 'Collateralize',
    sub_pledge: 'Withdraw',
    add_dollar: 'Generate',
    sub_dollar: 'Return',
    add_pledge_placeholder: 'Add EOS',
    sub_pledge_placeholder: 'Withdraw EOS',
    add_dollar_placeholder: 'Generate USDE',
    sub_dollar_placeholder: 'Return USDE',
    add_pledge_tip: 'Available',
    sub_pledge_tip: 'Max withdrawable',
    add_dollar_tip: 'Max to generate',
    sub_dollar_tip: 'Max returnable',
    create_pledge: 'Create a position',
    create_new_pledge: 'Create a new position',
    create_pledge_tip: 'No position found',
    create_pledge_desc: 'Create a position to generate USDE stablecoin, and claim your PIZZA reward.',
    create_pledge_desc2: 'Collateralize EOS, generate USDE, claim PIZZA reward',
    position_num: 'Total positions',
    my_position: 'My positions',
    my_eos_collateral: 'Total EOS in collateralization',
    my_usde_amount: 'Total USDE generated',
    my_reward_pizza_amount: 'PIZZA reward',
    position_list: 'Position list',
    position_history: 'Position history',
    position_id: 'Position ID',
    create_time: 'Start time',
    finish_time: 'Close time',
    close_price: 'Close price',
    adjustment_detail: 'Adjust',
    more: 'Inspect',
    adjustment: 'Adjust',
    pledge_system_info: 'Overview ',
    pledge_eos_validate_msg: 'EOS amount should be equal or larger than 1.0000 EOS',
    create_pledge_eos: 'Collateralize EOS',
    create_pledge_usde: 'Generate USDE',
    your_pledge_eos_amount: 'Collateralize EOS',
    your_pledge_usde_amount: 'Generate USDE',
    max: 'Max',
    ratio_tip: 'Fill in a number between 10 and 70',
    ratio_change_tip: 'Change the LTV will affect the amount of USDE you generate',
    normal_ratio: 'Standard LTV',
    high_ratio_tip: 'Positions with higher level of LTV are more vulnerable to liquidation risk',
    high_ratio_tip2: 'Positions with LTV of 70% or more are seriously exposured to liquidation risk',
    back: 'Back',
    position: 'Position',
    position_detail: 'Details',
    change_position_tip: ' Must be > 0',
    please_enter_position_amount: 'Please enter the required position data',
    add_pledge_amount_tip: 'Add more collateral to lower the liquidation risk',
    sub_dollar_amount_tip: 'Return USDE to lower the liquidation risk',
    change_position_history: 'Position history',
    please_choise_merge_position: 'Please select positions to merge',
    merge_position_eos_amount: 'Merged EOS',
    merge_position_usde_amount: 'Merged USDE',
    merge_position_tip: 'The selected positions will be merged with the current position',
    choise: 'Select',
    force_tip: 'The expected EOS price when the position breaches the 80% Max LTV ratio.',
    ratio_desc: 'Debt value / Collateral value.',
    normal_ratio_desc: 'The highest LTV allowed when creating a position.',
    sub_pledge_withdraw: 'Redeem and close',
    sub_pledge_withdraw_tip: 'Close the position and redeem all your EOS.',
    merging: 'Merging',
    liquidated_msg: 'Position liquidated',
    or: 'or',
    use_rules: "Use Rules",
    please_use: "Please use",
    desktop_scatter: "desktop Scatter",
    login_tip: "Please use @active account",
    wallet_support: "Supporting",
    wallet_version_tip: "The version is at least",
    download: "Download",
    version_notes: "Version notes",
    login_success: "Login success",
    operation_fail: "Operation fail",
    qr_trans_tip: "Scan the QR code to finish action",
    account_name: "Account name",
    tips: "Warning",
    scan_qr_tip1: "This action is not supported in QR code login.",
    scan_qr_tip2: "Please login with Wallet dApp or Scatter to perform future actions",
    search: "Search",
    swap_input_symbol_tip: "Input token amount",
    more_functions_tip: "More dapps are coming",
    pizza_swap_tip: "Based on the constant product model, this is the most decentralized swap function you can possibly get",
    maker_my_reward: 'My profit',
    my_maket_maker: 'My market maker',
    maket_maker_total_pool: 'Current liquidity pool',
    maket_maker_my_pool: 'My liquidity pool',
    maket_maker_total_pool_amount: 'Size of current liquidity pool',
    maket_maker_my_pool_amount: 'Size of my liquidity pool',
    maket_maker_ratio: 'Ratio',
    maket_maker_withdraw_amount: 'Withdraw amount',
    maket_maker_invest: 'Put in liquidity pool',
    maket_maker_invest_record: 'History',
    tab_pledge: 'Generate',
    tab_swap: 'Swap',
    tab_exchange: 'Exchange',
    set_code_tip: 'Enter referral code',
    activity_code_label: 'Referral code attached',
    set_code_text: 'Set Referral code',
    set_code_tip2: 'The referral you entered will be final and immutable',
    set_code_btn: 'Confirm',
    set_code_please: 'Enter referral code',
    activity_today_transaction: `Today's volume`,
    activity_today_rank: `Today's ranking`,
    activity_total_rank: 'Ranking',
    activity_total_transaction: 'General volume',
    activity_my_invite_transaction: 'My referral bonus',
    activity_my_invite_code: 'My referral code',
    activity_gen_invite_pic: 'Share',
    activity_list: 'Check ranking',
    activity_invite_num: 'Total invited',
    activity_today_total_transaction: 'Accumulative volume today',
    activity_reward: 'Reward',
    activity_can_receive: 'Reward receivable',
    otc_tip: 'Trade USDE/CNY on morecoin.com',
    activity_time: 'Event time',
    activity_last_update_time: 'Last updated',
    activity_last_update_tip: 'Data updated hourly',
    activity_today_top: `Today's MVP`,
    activity_username: 'User',
    activity_invite_transaction: 'Invitation bouns',
    activity_pizzaswap: 'PIZZASWAP Trading Contest',
    activity_today_list: `Today's ranking`,
    activity_total_list: 'General Ranking',
    activity_will_start: 'The game is starting soon.',
    activity_top_tip: (symbol) => {
      return `Daily MVP will receive 88 EOS reward`
    },
    activity_reward_tip: (amount, reward) => {
      return `Trade ${amount}，Get ${reward} Reward`
    },
    under_construction: 'Under construction',
    plvt: "Leveraged token",
    products: 'Products',
    generate_info: 'Collateralize to get USDE stablecoin and enjoy PIZZA reward.',
    pizza_info: 'A native decentralied exchange on the PIZZA financial network',
    lend: 'Lend',
    lend_info: 'Decentralized lending platform',
    deposit: 'Deposit',
    borrow: 'Borrow',
    market_overview: 'Market overview',
    lend_market: 'Market',
    vault: 'Vault',
    dec_lending: 'Decentralized lending',
    dec_lending_info: 'PizzaLend is a decentralized non-custodial crypto currency lending market protocol. Users could participate as depositors or/and borrowers. Depositors earn passive income by providing liquidity to the maket; borrowers provide excess collateral and borrow without time limit.',
    current_market_size: 'Current market size',
    remaining_position: 'Remaining position',
    bid_info: 'Bid info',
    market_size: 'Market size',
    total_lending:'Total lending value',
    total_deposit: 'Total deposit',
    apy: 'Annual return',
    apr: 'Annual borrow rate',
    collateralize: 'Collateralize',
    deposit_portfolio: 'Deposit portfolio',
    lend_withdraw: 'Withdraw',
    on: 'On',
    off: 'Off',
    total_borrow: 'Total borrow',
    health_factor: 'Health factor',
    total_collateral: 'Total collateral',
    add_collateral: 'Add collateral',
    post_deposit_health_factor: 'Post-deposit health factor',
    post_withdrawal_health_factor: 'Post-withdrawal health factor',
    post_borrow_health_factor: 'Post-borrow health factor',
    post_repay_health_factor: 'Post-repay health factor',
    post_deposit_info: 'Please choose token type to add',
    borrowable: 'Borrowable',
    repay: 'Repay',
    lend_history: 'History',
    deposite_withdraw_histpry: 'Deposits/withdrawals history',
    borrow_repay_histpry: 'Borrow/repay history',
    deposite_amount: 'Deposit amount',
    usage: 'Usage',
    current_circulating: 'Current circulating',
    whether_collateralizable: 'Whether collateralizable',
    max_ltv: 'Max LTV',
    liquidation_rate: 'Liquidation rate',
    liquidation_bonus: 'Liquidation bonus',
    historical_apy: 'Historical APY',
    historical_apr: 'Historical APR',
    max_withdraw_amount: 'Max withdrawal amount',
    total_borrowed: 'Total borrowed',
    borrow_amount: 'Borrow amount',
    repay_amount: 'Repay amount',
    max_borrow_amount: 'Max borrow amount',
    safe: 'Safe',
    dangerous: 'Dangerous',
    current_debt: 'Current debt',
    yes: 'Yes',
    no: 'No',
    must_choose: 'You must choose a collateral type before borrowing.',
    choose_collateral: 'Choose collateral',
    collateral_activated: 'Collateral activated',
    collateral_disabled: 'Collateral disabled',
    insufficient_balance: 'Insufficient balance',
    collateral_added: 'Collateral added',
    deposit_succeeded: 'Deposit succeeded',
    withdrawal_succeeded: 'Withdrawal succeeded',
    amount_required: 'Amount required',
    repay_succeeded: 'Repay succeeded',
    borrow_succeeded: 'Borrow succeeded',
    bid_succeeded: 'Bid succeeded',
    min_withdraw_amount: (symbol)=>{
      return `Available ${symbol} is less than 0.0001, withdrawal failed.`
    },
    minimum_loan_amount: 'Minimum loan amount 0.05',
    pizzalend_rules: 'PizzaLend Rules'
  }
}
export default (language)
