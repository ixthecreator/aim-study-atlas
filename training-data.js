window.AIM_TRAINING_DATA = {
  "updated": "2026-10-14",
  "premise": "小球里能修正，实战却先开枪：先练把已有能力接入交火。段位不能证明某项能力没有短板，但这种场景差异值得优先检查。",
  "definition": "微调是针对准星与当前命中位置之间的剩余小偏差，继续作出可控修正。它可以接在大幅移枪之后，也可以直接从预瞄位置开始；不要求每枪都先停死、再启动一次。",
  "microNotes": [
    {
      "title": "是修正，不是固定手法",
      "text": "没有通用的像素、角度或手腕动作门槛。“微”描述修正幅度相对较小，不规定只能用手指、只能慢移，也不要求故意欠瞄。已经对上就不必再制造一次微调。训练器的微调成绩能证明曾经完成过这类任务，不能单独证明压力下也能稳定调用。"
    },
    {
      "title": "小幅甩动 ≠ 必须完成修正",
      "text": "短距离快速移枪常被叫作 microflick；microcorrection 强调修正剩余偏差。一次小甩可能直接命中，也可能还需要修正。两词在教程里常混用。"
    },
    {
      "title": "确认不是额外等待",
      "text": "确认是有足够把握开火的判断。它可以与减速、微调和目标运动的读取重叠；不能把静态球的等待习惯无条件搬进 CS 的交火窗口。"
    },
    {
      "title": "开枪后的问题要单独看",
      "text": "CS 的后续弹着还受移动、射击恢复和后坐力影响。开火后“准星在头旁边”不等于只差一次静态球微调；首发修正与后续压枪应分开复盘。"
    }
  ],
  "references": [
    {
      "label": "MattyOW · Fluidity in Static Clicking",
      "url": "https://rawinput.net/resources/staticfluidity"
    },
    {
      "label": "MattyOW · How to Aim Train for TacFPS",
      "url": "https://rawinput.net/resources/linear"
    },
    {
      "label": "琪露诺 · 减速、微调期间也能点击 · 2:56",
      "url": "https://www.bilibili.com/video/BV1UM411S7M7/?t=176"
    }
  ],
  "hypotheses": [
    {
      "title": "遇敌就开火，修正来不及进入",
      "signal": "普通小球能修正；实战第一下到附近就开枪，随后蹲下或持续喷射。",
      "test": "在 CS 内比较无射击跟随、限定单发、正常交火。若前两种能修正，恢复正常射击就失去修正，优先练开火与修正的衔接。",
      "limit": "这是可检验的工作假设；尚未看到录像，不能判定你每次失误都如此。"
    },
    {
      "title": "开火时用力增加，后续移动变困难",
      "signal": "无射击能平滑移动，一开始点击就卡住；握力、向下压鼠标可能同时增加。",
      "test": "在低压 CS 练习中比较不开火与轻点击；观察差异。只在练习和回合间检查用力，交火时把注意留给目标。",
      "limit": "“用力预算”是高手解释经验的模型，不是已测得的生理诊断；没有证据就不重构握法。"
    },
    {
      "title": "预瞄与目标运动不匹配",
      "signal": "对大拉一直追尾；刚补到旧位置，目标已经继续移动。",
      "test": "用真实地图的同一个角度，交替练短拉和大拉。比较预瞄位置、修正方向与首发时机，保留对目标当前运动的观察。",
      "limit": "预瞄距离取决于角度、距离、信息与对手；不设统一的“离墙几个头”。"
    },
    {
      "title": "比赛里开始手动检查动作",
      "signal": "关键局脑内出现“停、看准星、微调、放松、再开枪”，动作变慢或中断。",
      "test": "练习阶段一次只查一个错误；比赛阶段只保留一个外部意图，例如“第一发落在目标上”。赛后再分析。",
      "limit": "口令是本页提出的实验，不是任何作者的原话，也不是人人有效的心理技巧。"
    }
  ],
  "experts": [
    {
      "name": "MattyOW",
      "label": "落点判断 / 连贯 / CS 线性点击",
      "credential": "Voltaic 官方团队页列为 Red Bull Ready Check 冠军、首位 Celestial Complete。此处为已公布成就，不是今天全部榜单的实时第一。",
      "credentialUrl": "https://voltaic.gg/team",
      "theory": "静态中的流畅，包含知道落点并接续下一动作；CS 训练还要读取横向移动，结合预瞄与小修正，避免一直追着目标身后补枪。",
      "application": "本站据此选用 Floating Heads Timing 作为辅助，并把主要验证放回 CS 同角度出人练习。",
      "refs": [
        {
          "label": "流畅度原文",
          "url": "https://rawinput.net/resources/staticfluidity"
        },
        {
          "label": "TacFPS 训练原文",
          "url": "https://rawinput.net/resources/linear"
        }
      ]
    },
    {
      "name": "Viscose",
      "label": "用力管理 / 小幅修正 / 训练迁移",
      "credential": "Raw Input 团队页标注 Voltaic S3 第 2；是指定赛季的成绩，不是当前所有项目的名次。",
      "credentialUrl": "https://rawinput.net/team",
      "theory": "其经验是：过度握紧或用力刹停，可能让后续微调难以接续；练习中可以拆动作，比赛中关注场景。顺滑也能包含快速运动。",
      "application": "若“不开枪能动、点击就卡”复现，再检查点击与持续移动能否并存。不能把所有停顿都归咎于紧张。",
      "refs": [
        {
          "label": "用力管理原文",
          "url": "https://rawinput.net/resources/tension"
        },
        {
          "label": "顺滑的定义与限定",
          "url": "https://rawinput.net/resources/smoothness"
        },
        {
          "label": "榜单训练如何迁移到游戏",
          "url": "https://rawinput.net/resources/topten"
        }
      ]
    },
    {
      "name": "minigod",
      "label": "短距控制 / 突然出人 / 分项计划",
      "credential": "Voltaic 官方团队页列为 Aimlabs VCT Combine 2022 冠军，并介绍其甩枪与 CS 项目纪录。",
      "credentialUrl": "https://voltaic.gg/team",
      "theory": "其公开 TacFPS 计划将微调与突发目标分成不同训练主题。Routine II 练短距控制，Routine III 练新目标与有限时间窗；强调训练器补充游戏内训练。",
      "application": "你的情况更应优先检验“突然出人后还能否使用微调”，而非只增加静态球难度。原计划是 Aimlabs，不能把它当作 KovaaK 代码。",
      "refs": [
        {
          "label": "作者完整 TacFPS 计划",
          "url": "https://docs.google.com/document/d/1zZqwH_MzKghYhM1sDe_H9O3O5SN3H8Rgp5qRI59mCrg/edit"
        },
        {
          "label": "Routine III 原链接（当前可用性未验证）",
          "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3335728420"
        }
      ]
    }
  ],
  "drills": [
    {
      "id": "existing-floating",
      "name": "VT Floating Heads Viscose Easier",
      "platform": "KovaaK",
      "author": "已有项目 / 本站选用",
      "focus": "movement",
      "status": "与 Floating Heads Timing 是不同场景，不能视作 MattyOW 原文推荐的同一版本。",
      "purpose": "已有此项目时，可复用它观察移动目标下的首发与修正衔接，无需为练习重新找一批小球图。",
      "how": "本站改编：可选 2–3 次完整练习，重点观察目标移动时是否继续读取。成绩已能稳定达到时，优先转去 CS 内练，不反复冲分。",
      "transfer": "训练器中的点击成绩不能证明真实交火中已能保留同样动作；只作为熟悉环境的对照。",
      "refs": []
    },
    {
      "id": "floating",
      "name": "Floating Heads Timing",
      "platform": "KovaaK",
      "author": "MattyOW",
      "focus": "movement",
      "status": "作者原文明确推荐；未在当前客户端试玩",
      "purpose": "读取水平移动，练习首发时机，以及预瞄之后的微调。",
      "how": "本站改编：选能稳定读懂目标的难度，做 2–3 次完整练习。看清运动后选择拦截或小修正；不为了拦截一直等待，也不追着尾部连续乱点。",
      "transfer": "仅作辅助：回到 CS 检查架枪偏置和大拉处理。训练器不包含完整的急停、掩体与回合风险。",
      "refs": [
        {
          "label": "MattyOW · Scenario Suggestions",
          "url": "https://rawinput.net/resources/linear"
        }
      ]
    },
    {
      "id": "pulse",
      "name": "Pulseshot precision / Trustechain raspberry",
      "platform": "KovaaK",
      "author": "MattyOW",
      "focus": "continuity",
      "status": "原文列出的两个可选任务名；未在客户端试玩",
      "purpose": "练习动作之间的连续性；适合训练器里本身也出现停顿的人。",
      "how": "按需选一个，不把两项都塞进每日计划。若普通小球已经连续，暂不优先加量。",
      "transfer": "任务中的时限或分数压力不等于关键局压力；仍需真人对抗检验。",
      "refs": [
        {
          "label": "MattyOW · In-game Translation",
          "url": "https://rawinput.net/resources/staticfluidity"
        }
      ]
    },
    {
      "id": "minigod-reflex",
      "name": "VT Minigod Weekly TacFPS Routine III",
      "platform": "Aimlabs",
      "author": "minigod",
      "focus": "trigger",
      "status": "作者文档明确链接；Steam 页面显示兼容/移除提示，未确认客户端可用",
      "purpose": "练习新目标出现时的读取，以及有限时间内使用已有瞄准能力。",
      "how": "原作者建议训练计划放在游戏后，约 25–40 分钟；不是赛前热身。针对当前问题可研究其任务思路，不必为计划额外更换软件。",
      "transfer": "若链接不可用，使用下方 CS 随机出人练习承接同一目标；这只是本站改编，不是官方复刻。",
      "refs": [
        {
          "label": "minigod · TacFPS Weekly Routines",
          "url": "https://docs.google.com/document/d/1zZqwH_MzKghYhM1sDe_H9O3O5SN3H8Rgp5qRI59mCrg/edit"
        }
      ]
    },
    {
      "id": "cs-first",
      "name": "CS 首发衔接：跟随 → 单发 → 正常射击",
      "platform": "CS2",
      "author": "本站改编",
      "focus": "trigger",
      "status": "本页训练实验；不是作者原版项目名",
      "purpose": "定位“能微调，却先开火”的情境切换。",
      "how": "同一武器、中距离：先用移动 BOT 短暂不开火，保持小幅修正；再限定单发，准星到可命中区域就开火；最后恢复正常短点射与扫射。每段约 2 分钟，只比较修正是否接得上。",
      "transfer": "限定单发是临时约束，不能变成实战只准爆头/永远不能扫射。没有固定等待毫秒数；已瞄准就射击。",
      "refs": [
        {
          "label": "改编依据：游戏内结合武器与目标运动 · 2:49",
          "url": "https://www.bilibili.com/video/BV17p4y1c7Eb/?t=169"
        }
      ]
    },
    {
      "id": "cs-peek",
      "name": "同角度随机出人 / 点位 1v1",
      "platform": "CS2",
      "author": "本站改编",
      "focus": "trigger",
      "status": "作者的地图练习思路 + 本页的随机化安排",
      "purpose": "让小幅修正进入真实地图视野、出人方式与对抗节奏。",
      "how": "选一个常失误的点位，请练习伙伴随机短拉或大拉，或用已有训练工具的随机出人功能。先练可控出人，再恢复正常射击与回合记分。",
      "transfer": "每次只观察“第一发有没有先于必要修正”。不故意等对手站稳；读错移动时允许继续短跟或换打法。",
      "refs": [
        {
          "label": "琪露诺 · 朋友对练与地图检查 · 4:53",
          "url": "https://www.bilibili.com/video/BV1BK4y1c7R4/?t=293"
        }
      ]
    },
    {
      "id": "keli-superb-0",
      "name": "Reflexbot Micro 2-hits SuperbAim",
      "platform": "KovaaK",
      "author": "克礼无明",
      "focus": "trigger",
      "status": "名称按 2024 视频简介核实；未核实当前 KovaaK 场景目录的可用性或同名版本。",
      "purpose": "首次命中后目标快速向某方向移动一次，再次命中得分；连续失误有换弹反馈。",
      "how": "作者建议：入门：失误换弹时不重开，判断刚才移动偏多还是偏少。 中等：首击后先停下，判断目标运动方向，再定位到停下位置。 高水平：首击后尽快读取方向，运动途中尝试跟住；观察目标停下时自身能否及时停稳。",
      "transfer": "对用户先作为筛查：如果无压力时能做、计分或急迫时乱，重点应转向 CS 受限交火转化，而不是无限追加微调量。 该视频没有给出统一分钟数；可用少量完整回合观察错误，不将本文实验用量标成作者原计划。",
      "refs": [
        {
          "label": "原教学与图名来源",
          "url": "https://www.bilibili.com/video/BV1he411n7iR/?t=149"
        }
      ]
    },
    {
      "id": "keli-superb-1",
      "name": "2 Targets Chainshot SuperbAim",
      "platform": "KovaaK",
      "author": "克礼无明",
      "focus": "continuity",
      "status": "这是训练约束，不是 CS 的通用转火战术。",
      "purpose": "同时出现两个目标，全部击杀后才刷新下一组。",
      "how": "作者建议：判断两个目标的位置关系，以图一训练的动作尽快打掉。 一组结束后回到墙面中间，观察新目标，并抬鼠复位。 失误不重开，重新获取目标并判断失误原因。",
      "transfer": "训练阶段保留该图的回中/复位约束；真实 CS 交火不能照搬成每杀一人都抬鼠回中。 作者推荐位于三图顺序的第二项，没有统一组数/分钟数。",
      "refs": [
        {
          "label": "原教学与图名来源",
          "url": "https://www.bilibili.com/video/BV1he411n7iR/?t=218"
        }
      ]
    },
    {
      "id": "keli-superb-2",
      "name": "4 Targets Chainshot SuperbAim",
      "platform": "KovaaK",
      "author": "克礼无明",
      "focus": "continuity",
      "status": "训练软件路线优化和实战威胁选择是不同任务。",
      "purpose": "每组四目标，全部击杀才刷新。",
      "how": "作者建议：识别哪些目标彼此较近、构成可连续处理的简单枪。 入门练路线；中等练短距与长距间切换节奏；高水平进一步提高近距连续移动和复位落鼠速度。",
      "transfer": "适合验证连续动作是否能保持读取，但 CS 实际威胁优先级不能照搬最近目标优先。 作者推荐位于三图顺序的第三项；无统一分数门槛。",
      "refs": [
        {
          "label": "原教学与图名来源",
          "url": "https://www.bilibili.com/video/BV1he411n7iR/?t=269"
        }
      ]
    },
    {
      "id": "cirno_list_flick",
      "name": "一次定位明显过慢",
      "code": "KovaaKsEntryfraggingSalmonDeserteagle",
      "platform": "KovaaK",
      "author": "琪露诺",
      "focus": "static",
      "status": "作者 2024 年专栏的原始代码已核对；未实际导入，不保证当前可用。",
      "purpose": "按具体静态问题选择的作者清单。",
      "how": "仅当正常场景录像也显示启动和移动过慢时考虑；不能直接用于解释关键局迟疑。",
      "transfer": "如果静态小球没有同类问题，暂不加练；这些代码不是对 CS 提前开火的直接处方。",
      "refs": [
        {
          "label": "作者原始代码专栏",
          "url": "https://www.bilibili.com/read/cv32408117/"
        },
        {
          "label": "对应视频片段",
          "url": "https://www.bilibili.com/video/BV1Xt421L72J/?t=423"
        }
      ]
    },
    {
      "id": "cirno_list_quality",
      "name": "过多抖动、过冲，以及确认或动作质量不足",
      "code": "KovaaKsStrafingGrayDeathball",
      "platform": "KovaaK",
      "author": "琪露诺",
      "focus": "static",
      "status": "作者 2024 年专栏的原始代码已核对；未实际导入，不保证当前可用。",
      "purpose": "按具体静态问题选择的作者清单。",
      "how": "若低压场景也重复过冲、点前抖动或无法修正，可选此类练习。",
      "transfer": "如果静态小球没有同类问题，暂不加练；这些代码不是对 CS 提前开火的直接处方。",
      "refs": [
        {
          "label": "作者原始代码专栏",
          "url": "https://www.bilibili.com/read/cv32408117/"
        },
        {
          "label": "对应视频片段",
          "url": "https://www.bilibili.com/video/BV1Xt421L72J/?t=435"
        }
      ]
    },
    {
      "id": "cirno_list_confirm_speed",
      "name": "目标周围停留过久、确认或目标切换慢",
      "code": "KovaaKsStrikingGreenAttrition",
      "platform": "KovaaK",
      "author": "琪露诺",
      "focus": "static",
      "status": "作者 2024 年专栏的原始代码已核对；未实际导入，不保证当前可用。",
      "purpose": "按具体静态问题选择的作者清单。",
      "how": "适合已有把握却拖延处理的静态问题；实际CS迟疑仍需对枪训练检验。",
      "transfer": "如果静态小球没有同类问题，暂不加练；这些代码不是对 CS 提前开火的直接处方。",
      "refs": [
        {
          "label": "作者原始代码专栏",
          "url": "https://www.bilibili.com/read/cv32408117/"
        },
        {
          "label": "对应视频片段",
          "url": "https://www.bilibili.com/video/BV1Xt421L72J/?t=449"
        }
      ]
    },
    {
      "id": "cirno_list_total_clicks",
      "name": "高命中率但总点击数形成瓶颈",
      "code": "KovaaKsCallingAlmondOfficer",
      "platform": "KovaaK",
      "author": "琪露诺",
      "focus": "static",
      "status": "作者 2024 年专栏的原始代码已核对；未实际导入，不保证当前可用。",
      "purpose": "按具体静态问题选择的作者清单。",
      "how": "偏静态冲分，不应因用户段位较高就默认需要。",
      "transfer": "如果静态小球没有同类问题，暂不加练；这些代码不是对 CS 提前开火的直接处方。",
      "refs": [
        {
          "label": "作者原始代码专栏",
          "url": "https://www.bilibili.com/read/cv32408117/"
        },
        {
          "label": "对应视频片段",
          "url": "https://www.bilibili.com/video/BV1Xt421L72J/?t=507"
        }
      ]
    },
    {
      "id": "cirno_list_rhythm",
      "name": "无论距离远近都按固定节拍点击",
      "code": "KovaaKsEnragingChattyAntieco",
      "platform": "KovaaK",
      "author": "琪露诺",
      "focus": "static",
      "status": "作者 2024 年专栏的原始代码已核对；未实际导入，不保证当前可用。",
      "purpose": "按具体静态问题选择的作者清单。",
      "how": "只有录像出现机械等间隔点击时选择，别在CS内强行改变射击节奏规则。",
      "transfer": "如果静态小球没有同类问题，暂不加练；这些代码不是对 CS 提前开火的直接处方。",
      "refs": [
        {
          "label": "作者原始代码专栏",
          "url": "https://www.bilibili.com/read/cv32408117/"
        },
        {
          "label": "对应视频片段",
          "url": "https://www.bilibili.com/video/BV1Xt421L72J/?t=516"
        }
      ]
    }
  ],
  "plan": [
    {
      "days": "01–02",
      "title": "建立实战基线",
      "text": "从普通局和关键局各取约 10 次可看清的交火。先看首发之前：准星是否仍偏离、自己是否仍在移动、目标是否继续横移。把无法判断的片段标为不确定，不凭击杀或死亡倒推原因。"
    },
    {
      "days": "03–05",
      "title": "把修正接回开火之前",
      "text": "完成 20 分钟练习。单发阶段只是在练习里暂时拆开“见人→立即喷”的关联；修正达到可命中区域就开火，不追求完美中心点，也不默数等待。"
    },
    {
      "days": "06–07",
      "title": "恢复正常射击，检查是否保留",
      "text": "增加随机出人，恢复短点射、扫射和掩体选择。若只有限定单发能做到，说明衔接尚未迁移；先降低出人复杂度，不继续刷更小的球。"
    },
    {
      "days": "08–12",
      "title": "在对抗中保留一个意图",
      "text": "用少量点位 1v1 或记分练习增加真实对抗。正式比赛只带一个外部意图：“第一发落在目标上”。不在交火时检查手腕、握力和分解步骤；回合间再重置。"
    },
    {
      "days": "13–14",
      "title": "用同类片段验收",
      "text": "再各取约 10 次普通与关键交火，与基线比较“先开火再修正”比例、明显迟疑和可用首发机会。修正增加但开火显著变慢，说明过度等待，需要减少检查步骤。"
    }
  ],
  "session": [
    {
      "minutes": "03",
      "title": "CS 中低压接续",
      "text": "短暂无射击跟随，再加入轻点击。小球已正常时，不再用大量静态训练证明自己会微调。"
    },
    {
      "minutes": "06",
      "title": "临时单发约束",
      "text": "在适合中距离单发的练习环境中，完成必要修正再开火；不必每次重新停死。观察“点击是否截断了移动”。"
    },
    {
      "minutes": "08",
      "title": "恢复正常交火",
      "text": "换随机出人、正常死斗或点位 1v1，恢复合理的点射与扫射。把这段的表现作为是否迁移的依据。"
    },
    {
      "minutes": "03",
      "title": "只记一个错误",
      "text": "复看 3–5 个片段，记“提前开火 / 过度等待 / 移动或武器因素 / 无法判断”。下次只调整占比最高的一类。"
    }
  ],
  "planNote": "这是基于公开教学与当前问题提出的两周实验，不是两位作者的原版处方，也不保证两周解决。每日可用时间尚未提供，暂按额外 20 分钟设计；赛前只做约 5–8 分钟熟悉枪械和地图节奏的热身，不把整套纠错塞进赛前。",
  "measurement": "建议用自己的屏幕录制观察动作先后，必要时逐帧核对。Demo 的插值、准星与实际弹着呈现存在限制；不能据此精确诊断“反应慢了多少毫秒”。统计同类场景的样本数量与比例，不以某一局 K/D 或某次最高分作结论。",
  "authorTheory": [
    {
      "name": "克礼无明",
      "title": "先看缺口，再组合定位、跟随与开火。",
      "text": "新读的 CS 学员案例保留了已有定位基础，增加持续跟随与动态点击。判断要随目标变化继续更新；短跟随可以与截取组合。“修正能力存在”与“交火中能接上它”是两件需要分别验证的事。",
      "boundary": "最后一句为本站对当前问题的推论。该个案约半小时的安排不是通用处方；字幕中的 AMARE、DOMI 等只有检索词，未写成未经核实的完整图名。",
      "refs": [
        {
          "label": "CS 案例 · 7:44",
          "url": "https://www.bilibili.com/video/BV16mYB68E3j/?t=464"
        },
        {
          "label": "截取与短跟 · 41:33",
          "url": "https://www.bilibili.com/video/BV16mYB68E3j/?t=2493"
        },
        {
          "label": "动态确认 · 7:34",
          "url": "https://www.bilibili.com/video/BV15P4y1U77J/?t=454"
        }
      ]
    },
    {
      "name": "琪露诺",
      "title": "分解用于学习，实战按当前任务组织。",
      "text": "确认不等于额外等待，减速或微调期间也可以点击。游戏内还要熟悉武器、移动和距离；复盘时发现的问题，不必全部变成比赛中的动作指令。",
      "boundary": "针对当前情况，本站选择一天一个问题：减少第一发抢在必要修正之前。单发约束与具体分钟数是本页实验；不是作者要求所有 CS 对枪都先慢确认。",
      "refs": [
        {
          "label": "确认的含义 · 1:26",
          "url": "https://www.bilibili.com/video/BV1Xt421L72J/?t=86"
        },
        {
          "label": "接回游戏机制 · 2:49",
          "url": "https://www.bilibili.com/video/BV17p4y1c7Eb/?t=169"
        },
        {
          "label": "一天一个问题 · 2:00",
          "url": "https://www.bilibili.com/video/BV1p64y1K7Mg/?t=120"
        }
      ]
    }
  ],
  "planRefs": [
    {
      "label": "琪露诺：游戏内练习 · 2:49",
      "url": "https://www.bilibili.com/video/BV17p4y1c7Eb/?t=169"
    },
    {
      "label": "琪露诺：点位对练 · 4:53",
      "url": "https://www.bilibili.com/video/BV1BK4y1c7R4/?t=293"
    },
    {
      "label": "克礼：训练与实战的要求 · 0:41",
      "url": "https://www.bilibili.com/video/BV13U2hYeEo7/?t=41"
    }
  ]
};
