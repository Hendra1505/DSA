function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = nulll;
}


// Catatan Penting: Rumus dari notasi O(Log N) adalah Log Nodes = Jumlah langkah
// Jadi jika kita memiliki 1000 nodes, maka log(1000) = 3. Jadi kita hanya perlu melakukan 3 langkah untuk menemukan node yang kita cari.