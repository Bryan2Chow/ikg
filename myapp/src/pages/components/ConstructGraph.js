
import * as d3 from "d3";
const ConstructGraph = (data) => {
    const nodes = data.nodes;
    // 获得边的数据
    const links = data.links;

    // 动态仿真,设置动态效果
    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => {
            return d.id
        }
        ).distance(200))
        // 设置节点的碰撞半径，就是两个节点的中心距离
        .force("collide", d3.forceCollide().radius(() => 50))
        // 将所有的节点都推向图表的中心（给定的一个点），默认坐标是[0,0]，施加力时，所有节点的相对位置保持不变
        .force("center", d3.forceCenter(data.width / 2, data.height / 2))
        .force("charge", d3.forceManyBody().strength(-10))

    // 构建画布svg
    const svg = d3.select(".container")
        // 添加svg画布
        .append('svg')
        .attr('class', 'svgs')
        // 给画布添加颜色
        .attr("fill", "red")
        .attr("viewBox", [0, 0, data.width, data.height])
        // 完成缩放
        .call(d3.zoom().on("zoom", function (event) {
            // console.log(event)
            g.attr("transform", event.transform)
        }))

    // 在svg画布下构建g标签元素，用来容纳links和nodes
    const g = svg.append('g')
        // g标签的clss属性为content
        .attr("class", "content")

    const positiveMarker = svg.append("marker")
        .attr("id", "positiveMarker")
        .attr("orient", "auto")
        .attr("stroke-width", 2)
        .attr("markerUnits", "strokeWidth")
        .attr("markerUnits", "userSpaceOnUse")
        .attr("viewBox", "0 -5 10 10")
        // 设置沿着路径的移动
        .attr("refX", 35)
        .attr("refY", 0)
        // 设置箭头的大小
        .attr("markerWidth", 12)
        .attr("markerHeight", 12)
        // 创建path标签，用于将箭头绘制出来
        .append("path")
        // 设置箭头四个点的坐标的位置
        .attr("d", "M 0 -5 L 10 0 L 0 5 ")
        // 填充箭头的颜色
        .attr('fill', '#999')
        // 透明度
        .attr("stroke-opacity", 0.6);

    const negativeMarker = svg.append("marker")
        .attr("id", "negativeMarker")
        .attr("orient", "auto")
        .attr("stroke-width", 2)
        .attr("markerUnits", "strokeWidth")
        .attr("markerUnits", "userSpaceOnUse")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", -25)
        .attr("refY", 0)
        .attr("markerWidth", 12)
        .attr("markerHeight", 12)
        .append("path")
        .attr("d", "M 10 -5 L 0 0 L 10 5")
        .attr('fill', '#999')
        .attr("stroke-opacity", 0.6);

    // 设置边
    const link = g.append("g")
        // 选择path标签
        .selectAll("path")
        // 绑定数据
        .data(links, function (d) {
            // console.log(d)
            if (typeof (d.source) === 'object') {
                return d.source.name + "_" + d.label + "_" + d.target.name
            }
            else {
                return d.source + "_" + d.label + "_" + d.target
            }
        })
        // 创建path标签
        .join("path")
        // 设置箭头属性
        .attr("marker-end", "url(#positiveMarker)")
        // 线的宽度
        .attr("stroke-width", d => Math.sqrt(d.value))
        // 线的颜色
        .attr("stroke", "skyblue")
        // clss名称
        .attr("class", "link")
        // 设置id，与后面的linksname相关联
        .attr("id", function (d) {
            // console.log(d)
            if (typeof (d.source) === 'object') {
                return d.source.name + "_" + d.label + "_" + d.target.name
            }
            else {
                return d.source + "_" + d.label + "_" + d.target
            }
        })

    // 设置边的名字
    const linksName = g.append('g')
        .selectAll("text")
        .data(links, function (d) {
            if (typeof (d.source) === 'object') {
                return d.source.name + "_" + d.label + "_" + d.target.name
            }
            else {
                return d.source + "_" + d.relation + "_" + d.target
            }
        })
        // g标签下面接text标签
        .join("text")
        // 用于文本的内容会上限浮动的问题
        .style('text-anchor', 'middle')
        // 设置颜色
        .style('fill', 'black')
        // 设置字体大小
        .style('font-size', '15px')
        // 设置字体的粗细
        .style('font-weight', 'middle');

    linksName
        // text标签下面接上textpath标签
        .append('textPath')
        // 连接到link标签，以href作为连接，id为： d.source.id + "_" + d.relation + "_" + d.target.id
        .attr('href', d => "#" + d.source.name + "_" + d.label + "_" + d.target.name)
        .attr('startOffset', '50%')
        // 文本内容
        .text(d => {
            return d.label
        });
    // console.log(link._groups[0][0])

    // 构建图的节点,每一个节点是园
    const node = g.append('g')
        .selectAll('circle')
        // 添加数据
        .data(nodes, d => d.name)
        // 添加circle元素标签
        .join("circle")
        .attr("r", 30)
        .attr("class", "node")
        .attr("fill", color)
        // 将节点的初始位置进行设置
        // .attr('transform', `translate(${500}, ${250})`)
        //给节点添加动态拖拽效果。
        .call(drag(simulation))

    node.append("title")
        .text(d => d.name);

    // 设置节点文本的信息
    const nodesName = g.append('g')
        .selectAll("text")
        .data(nodes)
        .join("text")
        .text(d => d.name)
        .attr("dx", function () {
            // 获得节点字的长度
            // console.log(this.getBoundingClientRect().width)
            return this.getBoundingClientRect().width * (-1)
        })
        .attr("dy", 0)
        .attr("fill", "black")
        .attr("class", "nodeName")

    simulation.on("tick", () => {
        // 设置边
        link
            // 设置边的
            .attr("d", function (d) {
                // console.log(d)
                if (d.source.x < d.target.x) {
                    return "M " + d.source.x + " " + d.source.y + " L " + d.target.x + " " + d.target.y
                }
                else {
                    return "M " + d.target.x + " " + d.target.y + " L " + d.source.x + " " + d.source.y
                }
            })
            // 设置箭头
            .attr("marker-end", function (d) {
                if (d.source.x < d.target.x) {
                    return "url(#positiveMarker)"
                }
                else {
                    return null
                }
            })
            .attr("marker-start", function (d) {
                if (d.source.x < d.target.x) {
                    return null
                }
                else {
                    return "url(#negativeMarker)"
                }
            })
        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);
        nodesName
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    })

    function drag(simulation) {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }

    function color(d) {
        return data.colorList[d.group]
    }
}

export { ConstructGraph }

