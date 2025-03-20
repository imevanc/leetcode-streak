/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
class Solution {
    constructor() {
        this.adj = [];
        this.component = [];
        this.minAndValue = [];
    }

    dfs(node, compId, andValue) {
        this.component[node] = compId;
        for (const [neighbor, weight] of this.adj[node]) {
            andValue[0] &= weight;
            if (this.component[neighbor] === -1) {
                this.dfs(neighbor, compId, andValue);
            }
        }
    }

    minimumCost(n, edges, queries) {
        this.adj = Array.from({ length: n }, () => []);
        this.component = Array(n).fill(-1);
        this.minAndValue = Array(n).fill(Number.MAX_SAFE_INTEGER);

        for (const [u, v, w] of edges) {
            this.adj[u].push([v, w]);
            this.adj[v].push([u, w]);
        }

        let compId = 0;
        for (let i = 0; i < n; i++) {
            if (this.component[i] === -1) {
                let andValue = [Number.MAX_SAFE_INTEGER];
                this.dfs(i, compId, andValue);
                this.minAndValue[compId] = andValue[0];
                compId++;
            }
        }

        return queries.map(([s, t]) => 
            this.component[s] !== this.component[t] ? -1 : this.minAndValue[this.component[s]]
        );
    }
}

function minimumCost(n, edges, queries) {
    return new Solution().minimumCost(n, edges, queries);
}
