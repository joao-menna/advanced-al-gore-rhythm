function maxSubArray(nums: number[]): number {
    // Soma de subarray atual
    let CurrentSum: number = nums[0];
    // Soma de subarray máxima encontrada
    let MaxSum: number = nums[0];

    for(let i: number = 1; i < nums.length; i++){
        // Pega o maior entre o número visualizado, e a soma de subarray atual com o número sendo visualizado
        CurrentSum = Math.max(nums[i], CurrentSum + nums[i]);
        // Checa se a soma atual é maior que a soma maior anterior
        MaxSum = Math.max(MaxSum, CurrentSum);
    }
    return MaxSum;
};
