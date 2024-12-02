<template>
     <div class="person-detail-content">
    <div class="person-header">
      <!-- 仅在 person 和 person.photo 存在时显示图片 -->
      <img v-if="person && person.photo" :src="person.photo" alt="Photo" class="person-photo" />

        <div class="person-info">
          <h1>{{ person.name }}</h1>
          <!-- 只在手机号存在时显示 -->
        <p v-if="person.phone"><strong>手机号:</strong> {{ person.phone }}</p>
          <p v-if="person.email"><strong>邮箱:</strong> {{ person.email }}</p>
          <p v-if="person.else"><strong> {{ person.else }} </strong></p>
          <p v-if="person.education"><strong>学历:</strong> {{ person.education }}</p>
        </div>
      </div>
  
      <div class="person-body">
        <h2>个人简历</h2>
        <p v-if="person.resume" style="text-indent: 2em;">{{ person.resume }}</p>
  
        <h2>学术研究</h2>
        <p>{{ person.research }}</p>
  
        <h2 v-if="person.educationBackground">教育背景</h2>
        <p v-if="person.educationBackground">{{ person.educationBackground }}</p>
        
        <h2 v-if="person.social">社会任职</h2>
        <p v-if="person.social">{{ person. social}}</p>

        <h2 v-if="person.publications">发表刊物</h2>
        <p v-if="person.publications">{{ person.publications }}</p>
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PersonDetailView',
    props: ['id'],
    data() {
      return {
        // 模拟人员数据，通常你会从API或后端获取这些数据
        people: {
          wangwenbo: {
            name: '王文博',  
            else: '北京邮电大学副校长  博士生导师',      
            photo: require('@/assets/images/wangwenbo.jpg'),
            resume: '男，汉族，1965年1月生，河北人，1986年6月入党，1992年6月参加工作，教授、博士生导师。现任北京邮电大学副校长',
            research: '自留校主持或参加完成了多项国家和部级科研项目，其中主要成果有：1993年“60路FDM/TDM数字传输复用转换器研制”获邮电部科技进步二等奖，1999年“第三代移动通信系统IMT-2000无线传输技术链路级和系统级评估与仿真”项目获信息产业部科技进步二等奖。2003年获国务院政府特殊津贴，2004年获教育部跨世纪人才支持计划。现主要从事的研究工作包括移动通信无线传输理论和技术研究，无线通信网络理论研究以及数字信号处理与软件无线电理论研究等，已在国际学术会议和国内外学术期刊上发表论文370余篇，出版专著和教材5部。王文博教授领导的无线信号处理与网络实验室（WSPNLab）是北京邮电大学电信工程学院无线通信中心下属的一个研究实验室。WSPNLab主要研究内容包括：无线移动通信关键技术与理论、宽带无线接入系统、无线移动网络信号处理技术、无线移动通信网络规划优化方法、无线通信系统干扰与共存等。WSPNLab拥有优越的学习工作环境、强大的科研实力及充足的科研经费，具有高素质的、充满活力的研究队伍，严谨活泼、求真务实、积极向上的学术氛围，是北京邮电大学无线移动通信技术主要研究力量之一。实验室拥有研究所需的高性能工作站、高档微机、各种仿真软件以及各种仪器仪表。WSPNLab已独立完成或参加了许多重大研究课题，包括国家863项目、国家部委、国内优秀企业和国际知名外资企业资助的科研项目，与国内外的研究机构、制造商以及运营商建立了长期的密切的合作关系。曾于2003年度和2004年度连续两年被评为“MOTOROLA最佳项目合作伙伴”。实验室积极支持研究生发表高水平论文和参加国际学术交流。承担的主要科研项目主要有：B3G系统与关键技术的研究、TD-SCDMA系统与网络的研究与开发、3G长期演进技术研究、无线组网技术研究。',
            educationBackground:'分别于1986年、1989年和1992年在北京邮电大学获本科、硕士和博士学位。博士毕业后留校工作，其中2002年10月至2003年10月在美国德州达拉斯从事研究开发工作。1982年9月至1986年6月，北京邮电学院电信工程专业本科生。1986年9月至1989年1月，北京邮电学院电路、信号与系统专业硕士研究生。1989年3月至1992年6月北京邮电学院电路、信号与系统专业博士研究生。1992年6月至2008年5月，历任讲师、副教授、教授。2008年6月至2008年9月，任北京邮电大学电信工程学院院长。2008年6月至2017年9月，任北京邮电大学研究生院常务副院长，期间2016年1月至2017年9月任北京邮电大学党委研究生工作部部长。2015年2月起任北京邮电大学党委常委。2017年7月起任北京邮电大学副校长（2018年12月3日起正式任职',
            social:'IEEE会员，北京通信学会理事，北京邮电大学学报编委，北京邮电大学学术委员会常委，北京市海淀区第13届人大代表。中国通信学会理事、北京通信学会副理事长、国务院学位委员会“信息与通信工程”学科评议组成员 ，泛网无线通信教育部重点实验室学术委员会副主任，中国通信学会理事国防通信分委员会副主任。',
            publications:'发表学术论文100多篇、国际会议论文200多篇，提交技术标准70余篇，申请专利200余项，授权发明专利110余项',
          },
          zhangxing: {
            name: "张兴",
            photo: require('@/assets/images/zhangxing.jpg'), // 照片路径
            email: "hszhang@bupt.edu.cn",
            else: "北京邮电大学教授，研究生、博士生导师",
            resume: `张兴，北京邮电大学教授，博士生导师，信通院学术委员会委员，无线通信研究中心主任。

2007年6月毕业于北京邮电大学，获工学博士学位。2015年牛津大学高级访问学者。2014年至今任北京邮电大学教授、博士生导师。中国大数据技术与应用联盟副秘书长。入选北京科技新星和北京青年英才计划。IEEE高级会员。担任中国通信学会数字孪生与网络仿真委员会副主任委员、卫星通信委员会委员、算力网络委员会委员等。

主要研究方向包括：5G/6G移动通信、卫星互联网、算力网络、智能边缘计算等。近年来主持或作为主要人员完成国家973课题、国家重点研发计划课题、国防技术基础加强重点课题(173)、国家自然科学基金、企事业联合研发课题等三十余项。在国际期刊与会议上发表300余篇论文，多篇论文入选ESI高被引文章；申请发明专利100余项，5项专利获得转让。出版学术专著3部、译著2部。

获教育部技术发明奖一等奖1项、教育部自然科学奖二等奖1项、中国电子学会科技进步二等奖1项、IEEE等国际学术会议最佳论文奖（Best Paper Award）6项、IEEE WCSP十周年最佳论文奖、IEEE Outstanding Leadership Award、2019年麒麟科学技术奖等。在ITU/3GPP等提交标准提案立项30余项，国内通信行业标准2项。研究成果获中国通信标准化协会CCSA优秀案例、2023年首都应急管理优秀案例、2022和2023年度国际电信联盟（ITU）中方优秀文稿、2023边缘计算十大解决方案等。`,
            research: `5G/6G移动通信系统
卫星互联网、星地融合信息网络
算力网络与智能计算
移动边缘网络与边缘智能`,
            educationBackground: "2007年毕业于北京邮电大学，获得工学博士学位",
            social: `中国通信学会数字孪生与网络仿真专委会副主任委员；
中国通信学会算力网络专委会委员；
中国通信学会卫星通信委员会委员`,
            publications: "主持或作为主要人员完成国家973课题、国家重点研发计划课题、国防技术基础加强重点课题(173)、国家自然科学基金、企事业联合研发课题等三十余项。在国际期刊与会议上发表300余篇论文，多篇论文入选ESI高被引文章；申请发明专利100余项，5项专利获得转让。出版学术专著3部、译著2部。"
      },

        zhangjiaxin: {
          name: "张佳鑫",
          photo: require('@/assets/images/zhangjiaxin.jpg'), 
        email: "jxz@bupt.edu.cn",
        else: "北京邮电大学副教授 教学科研型教师",
        education: "研究生毕业",
        educationBackground: "北京邮电大学 | 通信与信息系统 | 工学博士学位 | 博士研究生毕业",
        resume: "张佳鑫，男，北京邮电大学副教授，信息与通信工程学院泛网无线教育部重点实验室。2017年毕业于北京邮电大学信息与通信工程专业，英国萨里大学（University of Surrey）访问学者。研究方向为卫星地面融合网络、算力网络与智慧社区等，参与多项国家973项目、国家自然科学基金和国家科技重大专项等项目，发表SCI/EI论文30余篇，申请国家发明专利10余项，曾荣获第九届北京市优秀青年人才、北京青年五四奖章、北京市优秀思想政治工作者、IEEE WCSP 10-year Anniversary Excellent Paper Award、麒麟科学技术奖、IEEE Outstanding Service Award等荣誉。",
        research: "卫星地面融合网络研究, 算力网络与社区计算",
        publications: "https://www.researchgate.net/profile/Jiaxin_Zhang10/publications"
      },
      
        
        quanqingyi:{
          name: "全庆一",
          photo: require('@/assets/images/quanqingyi.jpg'), 
        else: "北京邮电大学副教授，硕士生导师",
        email: "",  // 如果没有提供邮箱，保持为空
        
        phone: "",  // 没有提供手机号
        resume: "全庆一，男，副教授，硕士生导师。1967年生，1990年西电学士（信息工程系），1993年西电硕士（信息工程系），1997年北京交通大学（原北方交通大学）博士（通信与控制工程系），1997-1999年在北京邮电大学电子学与通信学科从事博士后研究工作，1999年至今在北邮任教。期间，2005-2006年在韩国产业技术大学访问。主要研究方向是无线技术及其应用。多年来一直从事移动通信、卫星定位和无线传感器网络方面的教学和科研工作。",
        research: "无线技术及其应用，移动通信，卫星定位，无线传感器网络",
        educationBackground: "北京邮电大学 | 通信与控制工程系 | 博士学位 | 博士研究生毕业",
        social: "研究方向: 无线技术及其应用",
        publications: "无" // 假设目前没有发表刊物
        },

        liyang:{
          name: "李泱",
        phone: "17331409621",
        email: "lybupt2018@gmail.com",
        photo: require('@/assets/images/liyang.png'), 
        else: "北京邮电大学直博研究生",
        education: "博士及以上",
        resume: "李泱，河北人。2018年毕业于河北衡水第一中学，同年考入北京邮电大学，现保送为王文博老师的直博研究生，由王文博教授和张兴教授联合培养。",
        research: "移动边缘计算，终端辅助边缘网络，多维资源管控，边缘协作",
        educationBackground: "2018年毕业于河北衡水第一中学，考入北京邮电大学",

        },

        chengzetao: {
          name: "成泽涛",
          photo: require('@/assets/images/chengzetao.png'),
          phone: "15319016461",
          email: "ztcheng0630@163.com",
          else: "北京邮电大学研究生",
          education: "硕士",
          resume: "成泽涛，陕西西安人，本科就读于西安电子科技大学通信工程专业，保研至北京邮电大学信息与通信工程学院WSPN实验室。",
          research: "算力网络，边缘模型，联邦学习",
          educationBackground: "西安电子科技大学通信工程专业 本科，保研至北京邮电大学信息与通信工程学院",
        },
        zhaoyunji: {
          name: "赵云霁",
          phone: "13581765621",
          photo: require('@/assets/images/zhaoyunji.png'),
          email: "ts_yunji@163.com",
          else: "北京邮电大学研究生",
          education: "硕士",
          resume: "曾带队获得国家级大创奖项，市级优秀毕业生；大三进入WSPN实验室参与Flex CPN开发，在通算一体网络方面持续钻研多年，对项目的科研成果进行有机转化与应用落地，参加多项学术竞赛与创新创业竞赛。",
          research: "通算一体网络、边缘智能",
          educationBackground: "2016.9-2019.6 北京十一学校\n2019.9-2023.6 北京邮电大学 本科\n2023.9至今 北京邮电大学 硕士",
        },
        sunboquan: {
          name: "孙博泉",
          phone: "18610733106",
          photo: require('@/assets/images/sunboquan.png'),
          email: "boquan_sun@bupt.com",
          else: "北京邮电大学研究生",
          education: "硕士",
          resume: "孙博泉，男，24岁，中共党员。2023年6月毕业于西安电子科技大学通信工程学院，现于北京邮电大学信息与通信工程学院攻读硕士学位。",
          research: "算力网络，大模型",
          educationBackground: "西安电子科技大学通信工程学院 大学专科，现攻读硕士学位",
        },
        zhangheling: {
          name: "张赫灵",
          phone: "18614066908",
          photo: require('@/assets/images/zhangheling.png'),
          email: "zhangheling@bupt.edu.cn",
          else: "北京邮电大学研究生",
          education: "硕士",
          resume: "WSPN研一学生",
          research: "边缘智能与算力网络",
          educationBackground: "2020~2024于北京邮电大学就读本科，2024年保研至WSPN实验室攻读硕士",
          publications: "Joint D2D and Base Station Collaboration with Hierarchical Task Offloading in MEC Networks, 发表于2024",
        },
        gexinlei: {
          name: "葛新蕾",
          phone: "18363820856",
          photo: require('@/assets/images/gexinlei.png'),
          email: "2019gexinlei@bupt.edu.cn",
          else: "北京邮电大学研究生",
          education: "硕士",
          resume: "研二在读，现研究方向为边缘计算。",
          research: "边缘计算",

        },     
        yuzitong: {
          name: "于子童",
          phone: "13943702002",
          photo: require('@/assets/images/yuzitong.png'),
          email: "1192631472@qq.com",
          else: "北京邮电大学研究生",
          education: "硕士",
          resume: "2024级硕士研究生。",
          research: "边缘智能大模型",

        },      
          // 你可以继续为每个人定义数据
        },
      };
    },
    computed: {
      person() {
        return this.people[this.id]; // 根据ID获取当前人的数据
      },
    },
  };
  </script>
  
  <style scoped>
  .person-detail-content {
    margin: 20px;
  }
  
  .person-header {
    display: flex;
    align-items: center;
  }
  
  .person-photo {
    width: 150px;
    margin-right: 20px;
  }
  
  .person-info h1 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
  }
  
  .person-info p {
    margin: 5px 0;
  }
  
  .person-body h2 {
    font-size: 20px;
    margin-top: 30px;
    font-weight: bold;
  }
  
  .person-body ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  .person-body li {
    margin: 5px 0;
  }
  </style>
  