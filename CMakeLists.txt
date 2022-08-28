# Zephyr tflite-micro module CMakeLists.txt file.
#
# This file has been patched to use CMSIS-NN optimized kernels. It also includes
# some common CMSIS-DSP functions.
#
# CMSIS can be downloaded from https://github.com/ARM-software/CMSIS_5. 
# 
# For more details about CMSIS-NN see: https://github.com/ARM-software/CMSIS_5/tree/develop/CMSIS/NN

if (CONFIG_TENSORFLOW_LITE_MICRO)

  set(TENSORFLOW_LITE_MICRO_DIR ${ZEPHYR_CURRENT_MODULE_DIR})

  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -DCMSIS_NN")

  # Set this to your local CMSIS directory
  set(CMSIS_DIR "/opt/CMSIS_5-5.9.0")

  zephyr_library()

  zephyr_include_directories(
    ${TENSORFLOW_LITE_MICRO_DIR}/.
    ${TENSORFLOW_LITE_MICRO_DIR}/third_party_static/gemmlowp
    ${TENSORFLOW_LITE_MICRO_DIR}/third_party_static/flatbuffers/include
    ${TENSORFLOW_LITE_MICRO_DIR}/third_party_static/ruy
    ${CMSIS_DIR}
    ${CMSIS_DIR}/CMSIS/NN/Include
    ${CMSIS_DIR}/CMSIS/DSP/Include
  )

  zephyr_library_sources(
    # TFLite Micro sources
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/core/api/error_reporter.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/core/api/flatbuffer_conversions.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/core/api/op_resolver.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/core/api/tensor_utils.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/schema/schema_utils.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/all_ops_resolver.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/fake_micro_context.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/flatbuffer_utils.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/memory_helpers.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/micro_allocation_info.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/micro_allocator.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/micro_context.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/micro_error_reporter.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/micro_graph.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/micro_interpreter.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/micro_profiler.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/micro_resource_variable.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/micro_string.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/micro_time.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/micro_utils.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/mock_micro_graph.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/recording_micro_allocator.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/system_setup.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/c/common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/kernels/kernel_util.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/kernels/internal/quantization_util.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/kernels/internal/reference/portable_tensor_utils.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/activations.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/activations_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/add_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/add_n.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/arg_min_max.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/assign_variable.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/batch_to_space_nd.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/broadcast_args.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/broadcast_to.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/call_once.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/cast.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/ceil.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/circular_buffer.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/circular_buffer_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/circular_buffer_flexbuffers_generated_data.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/comparisons.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/concatenation.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/conv_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/cumsum.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/depth_to_space.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/depthwise_conv_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/dequantize.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/dequantize_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/detection_postprocess.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/detection_postprocess_flexbuffers_generated_data.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/div.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/elementwise.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/elu.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/ethosu.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/exp.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/expand_dims.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/fill.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/floor.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/floor_div.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/floor_mod.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/fully_connected_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/gather.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/gather_nd.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/hard_swish.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/hard_swish_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/if.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/kernel_runner.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/kernel_util.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/l2_pool_2d.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/l2norm.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/leaky_relu.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/leaky_relu_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/log_softmax.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/logical.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/logical_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/logistic.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/logistic_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/lstm_eval.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/maximum_minimum.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/micro_tensor_utils.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/mirror_pad.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/mul_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/neg.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/pack.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/pad.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/pooling_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/prelu.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/prelu_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/quantize.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/quantize_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/read_variable.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/reduce.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/reduce_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/reshape.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/resize_bilinear.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/resize_nearest_neighbor.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/round.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/select.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/shape.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/slice.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/softmax_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/space_to_batch_nd.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/space_to_depth.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/split.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/split_v.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/squared_difference.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/squeeze.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/strided_slice.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/sub.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/sub_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/svdf_common.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/tanh.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/transpose.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/transpose_conv.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/unidirectional_sequence_lstm.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/unpack.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/var_handle.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/while.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/zeros_like.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/memory_planner/greedy_memory_planner.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/memory_planner/linear_memory_planner.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/memory_planner/non_persistent_buffer_planner_shim.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/arena_allocator/non_persistent_arena_buffer_allocator.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/arena_allocator/persistent_arena_buffer_allocator.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/arena_allocator/recording_single_arena_buffer_allocator.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/arena_allocator/single_arena_buffer_allocator.cc

    # Replace operations with CMSIS_NN optimized implementations
    #${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/fully_connected.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/cmsis_nn/fully_connected.cc
    #${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/mul.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/cmsis_nn/mul.cc
    #${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/pooling.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/cmsis_nn/pooling.cc
    #${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/softmax.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/cmsis_nn/softmax.cc
    #${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/depthwise_conv.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/cmsis_nn/depthwise_conv.cc
    #${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/conv.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/cmsis_nn/conv.cc
    #${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/add.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/cmsis_nn/add.cc
    #${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/svdf.cc
    ${TENSORFLOW_LITE_MICRO_DIR}/tensorflow/lite/micro/kernels/cmsis_nn/svdf.cc

    # Include CMSIS-NN sources
    ${CMSIS_DIR}/CMSIS/NN/Source/PoolingFunctions/arm_avgpool_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/PoolingFunctions/arm_max_pool_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/NNSupportFunctions/arm_nn_depthwise_conv_nt_t_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/NNSupportFunctions/arm_nn_vec_mat_mult_t_svdf_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/NNSupportFunctions/arm_nn_mat_mul_core_1x_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/NNSupportFunctions/arm_nn_vec_mat_mult_t_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/NNSupportFunctions/arm_nn_depthwise_conv_nt_t_padded_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/NNSupportFunctions/arm_nn_mat_mul_core_4x_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/NNSupportFunctions/arm_nn_mat_mult_nt_t_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/FullyConnectedFunctions/arm_fully_connected_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConcatenationFunctions/arm_concatenation_s8_x.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConcatenationFunctions/arm_concatenation_s8_w.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConcatenationFunctions/arm_concatenation_s8_y.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConcatenationFunctions/arm_concatenation_s8_z.c
    ${CMSIS_DIR}/CMSIS/NN/Source/SoftmaxFunctions/arm_nn_softmax_common_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/SoftmaxFunctions/arm_softmax_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/SoftmaxFunctions/arm_softmax_s8_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/SVDFunctions/arm_svdf_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ActivationFunctions/arm_relu6_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/BasicMathFunctions/arm_elementwise_add_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/BasicMathFunctions/arm_elementwise_mul_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_convolve_1x1_s8_fast.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_depthwise_conv_3x3_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_nn_mat_mult_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_depthwise_conv_wrapper_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_nn_depthwise_conv_s8_core.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_convolve_1_x_n_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_depthwise_conv_s8_opt.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_convolve_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_depthwise_conv_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_convolve_wrapper_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_nn_mat_mult_kernel_s8_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ReshapeFunctions/arm_reshape_s8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/PoolingFunctions/arm_max_pool_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/PoolingFunctions/arm_avgpool_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/NNSupportFunctions/arm_nn_vec_mat_mult_t_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/NNSupportFunctions/arm_nn_mat_mul_kernel_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/FullyConnectedFunctions/arm_fully_connected_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/SoftmaxFunctions/arm_softmax_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/SoftmaxFunctions/arm_softmax_s8_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/BasicMathFunctions/arm_elementwise_mul_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/BasicMathFunctions/arm_elementwise_add_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_depthwise_conv_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_convolve_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_convolve_wrapper_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_convolve_fast_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ConvolutionFunctions/arm_nn_mat_mult_kernel_s8_s16.c
    ${CMSIS_DIR}/CMSIS/NN/Source/SoftmaxFunctions/arm_softmax_q7.c
    ${CMSIS_DIR}/CMSIS/NN/Source/SoftmaxFunctions/arm_softmax_u8.c
    ${CMSIS_DIR}/CMSIS/NN/Source/ActivationFunctions/arm_relu_q7.c
    ${CMSIS_DIR}/CMSIS/NN/Source/NNSupportFunctions/arm_q7_to_q15_with_offset.c

    # CMSIS-DSP BasicMathFunctions
    ${CMSIS_DIR}/CMSIS/DSP/Source/BasicMathFunctions/arm_add_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/BasicMathFunctions/arm_abs_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/BasicMathFunctions/arm_clip_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/BasicMathFunctions/arm_dot_prod_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/BasicMathFunctions/arm_mult_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/BasicMathFunctions/arm_negate_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/BasicMathFunctions/arm_offset_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/BasicMathFunctions/arm_scale_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/BasicMathFunctions/arm_sub_f32.c

    # CMSIS-DSP MatrixFunctions
    ${CMSIS_DIR}/CMSIS/DSP/Source/MatrixFunctions/arm_mat_add_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/MatrixFunctions/arm_mat_cholesky_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/MatrixFunctions/arm_mat_cmplx_mult_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/MatrixFunctions/arm_mat_cmplx_trans_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/MatrixFunctions/arm_mat_init_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/MatrixFunctions/arm_mat_inverse_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/MatrixFunctions/arm_mat_ldlt_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/MatrixFunctions/arm_mat_mult_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/MatrixFunctions/arm_mat_scale_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/MatrixFunctions/arm_mat_solve_lower_triangular_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/MatrixFunctions/arm_mat_solve_upper_triangular_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/MatrixFunctions/arm_mat_sub_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/MatrixFunctions/arm_mat_trans_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/MatrixFunctions/arm_mat_vec_mult_f32.c

    # CMSIS-DSP StatisticsFunctions
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_absmax_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_absmax_no_idx_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_absmin_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_absmin_no_idx_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_entropy_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_kullback_leibler_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_logsumexp_dot_prod_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_logsumexp_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_max_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_max_no_idx_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_mean_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_min_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_min_no_idx_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_power_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_rms_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_std_f32.c
    ${CMSIS_DIR}/CMSIS/DSP/Source/StatisticsFunctions/arm_var_f32.c    
)

endif()
