class Matrix4 {
    buffer: number[];

    // prettier-ignore
    constructor(n11: number = 1, n12: number = 0, n13: number = 0, n14: number = 0, 
                n21: number = 0, n22: number = 1, n23: number = 0, n24: number = 0, 
                n31: number = 0, n32: number = 0, n33: number = 1, n34: number = 0, 
                n41: number = 0, n42: number = 0, n43: number = 0, n44: number = 1) {
        this.buffer = new Array(16);

        this.set(
            n11, n12, n13, n14, 
            n21, n22, n23, n24, 
            n31, n32, n33, n34, 
            n41, n42, n43, n44
        );
    }

    // prettier-ignore
    set(n11: number, n12: number, n13: number, n14: number,
        n21: number, n22: number, n23: number, n24: number,
        n31: number, n32: number, n33: number, n34: number,
        n41: number, n42: number, n43: number, n44: number) : Matrix4 {
        const e = this.buffer;

        e[0] = n11; e[1] = n12; e[2] = n13; e[3] = n14;
        e[4] = n21; e[5] = n22; e[6] = n23; e[7] = n24;
        e[8] = n31; e[9] = n32; e[10] = n33; e[11] = n34;
        e[12] = n41; e[13] = n42; e[14] = n43; e[15] = n44;

        return this;
    }

    multiply(m: Matrix4): Matrix4 {
        const a = this.buffer;
        const b = m.buffer;
        return new Matrix4(
            b[0] * a[0] + b[1] * a[4] + b[2] * a[8] + b[3] * a[12],
            b[0] * a[1] + b[1] * a[5] + b[2] * a[9] + b[3] * a[13],
            b[0] * a[2] + b[1] * a[6] + b[2] * a[10] + b[3] * a[14],
            b[0] * a[3] + b[1] * a[7] + b[2] * a[11] + b[3] * a[15],
            b[4] * a[0] + b[5] * a[4] + b[6] * a[8] + b[7] * a[12],
            b[4] * a[1] + b[5] * a[5] + b[6] * a[9] + b[7] * a[13],
            b[4] * a[2] + b[5] * a[6] + b[6] * a[10] + b[7] * a[14],
            b[4] * a[3] + b[5] * a[7] + b[6] * a[11] + b[7] * a[15],
            b[8] * a[0] + b[9] * a[4] + b[10] * a[8] + b[11] * a[12],
            b[8] * a[1] + b[9] * a[5] + b[10] * a[9] + b[11] * a[13],
            b[8] * a[2] + b[9] * a[6] + b[10] * a[10] + b[11] * a[14],
            b[8] * a[3] + b[9] * a[7] + b[10] * a[11] + b[11] * a[15],
            b[12] * a[0] + b[13] * a[4] + b[14] * a[8] + b[15] * a[12],
            b[12] * a[1] + b[13] * a[5] + b[14] * a[9] + b[15] * a[13],
            b[12] * a[2] + b[13] * a[6] + b[14] * a[10] + b[15] * a[14],
            b[12] * a[3] + b[13] * a[7] + b[14] * a[11] + b[15] * a[15],
        );
    }

    clone(): Matrix4 {
        const e = this.buffer;
        // prettier-ignore
        return new Matrix4(
            e[0], e[1], e[2], e[3], 
            e[4], e[5], e[6], e[7], 
            e[8], e[9], e[10], e[11], 
            e[12], e[13], e[14], e[15]
        );
    }
}

export { Matrix4 };
