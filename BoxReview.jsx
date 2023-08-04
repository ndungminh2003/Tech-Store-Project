import { Rating, Stack, styled } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const BoxReview = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    width: 340,
    height: 8,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#D7000E" : "#308fe8",
    },
  }));
  return (
    <div className="tw-p-2 tw-shadow-cellphone">
      <h1 className="tw-text-[#363636] tw-mb-6 tw-text-base tw-font-semibold">
        Đánh giá & nhận xét iPhone 14 Pro Max 256GB | Chính hãng VN/A
      </h1>
      <div className="tw-flex tw-items-center tw-border tw-border-[#e5e7eb] tw-rounded-2xl tw-p-2">
        <div className="tw-w-[40%] tw-text-center tw-border-r tw-border-[#e5e7eb]">
          <p className="tw-text-[#363636] tw-text-2xl tw-font-semibold">5.0/5</p>
          <Rating readOnly value={5} className="!tw-text-base" />
          <p>
            <strong>9</strong> đánh giá và nhận xét
          </p>
        </div>
        <div className="tw-w-[60%] tw-pl-5">
          <div className="tw-flex tw-items-center tw-gap-2">
            <div className="tw-flex tw-items-center tw-gap-1">
              <h1 className="tw-text-[#4a4a4a] tw-font-bold tw-text-sm">5</h1>
              <StarIcon className="!tw-fill-[#f59e0b] !tw-text-base" />
            </div>
            <div>
              <BorderLinearProgress variant="determinate" value={100} />
            </div>
            <span className="tw-text-xs tw-text-[#4a4a4a]">9 đánh giá</span>
          </div>
          <div className="tw-flex tw-items-center tw-gap-2">
            <div className="tw-flex tw-items-center tw-gap-1">
              <h1 className="tw-text-[#4a4a4a] tw-font-bold tw-text-sm tw-min-w-[10px]">
                4
              </h1>
              <StarIcon className="!tw-fill-[#f59e0b] !tw-text-base" />
            </div>
            <div>
              <BorderLinearProgress variant="determinate" value={0} />
            </div>
            <span className="tw-text-xs tw-text-[#4a4a4a]">0 đánh giá</span>
          </div>
          <div className="tw-flex tw-items-center tw-gap-2">
            <div className="tw-flex tw-items-center tw-gap-1">
              <h1 className="tw-text-[#4a4a4a] tw-font-bold tw-text-sm tw-min-w-[10px]">
                3
              </h1>
              <StarIcon className="!tw-fill-[#f59e0b] !tw-text-base" />
            </div>
            <div>
              <BorderLinearProgress variant="determinate" value={0} />
            </div>
            <span className="tw-text-xs tw-text-[#4a4a4a]">0 đánh giá</span>
          </div>
          <div className="tw-flex tw-items-center tw-gap-2">
            <div className="tw-flex tw-items-center tw-gap-1">
              <h1 className="tw-text-[#4a4a4a] tw-font-bold tw-text-sm tw-min-w-[10px]">
                2
              </h1>
              <StarIcon className="!tw-fill-[#f59e0b] !tw-text-base" />
            </div>
            <div>
              <BorderLinearProgress variant="determinate" value={0} />
            </div>
            <span className="tw-text-xs tw-text-[#4a4a4a]">0 đánh giá</span>
          </div>
          <div className="tw-flex tw-items-center tw-gap-2">
            <div className="tw-flex tw-items-center tw-gap-1">
              <h1 className="tw-text-[#4a4a4a] tw-font-bold tw-text-sm tw-min-w-[10px]">
                1
              </h1>
              <StarIcon className="!tw-fill-[#f59e0b] !tw-text-base" />
            </div>
            <div>
              <BorderLinearProgress variant="determinate" value={0} />
            </div>
            <span className="tw-text-xs tw-text-[#4a4a4a]">0 đánh giá</span>
          </div>
        </div>
      </div>
      <p className="tw-text-center tw-my-2">Bạn đánh giá sao sản phẩm này</p>
      <div className="tw-text-center">
        <button className="tw-bg-[#d7000e] tw-w-[300px] tw-text-white tw-rounded-[10px] tw-py-2">
          Đánh giá ngay
        </button>
      </div>

      <div className="tw-mt-2">
        <div className="tw-mb-4">
          <div className="tw-flex tw-justify-between tw-items-center ">
            <div className="tw-flex tw-items-center tw-gap-2">
              <p className="tw-text-[#1e1619] tw-font-semibold tw-w-[25px] tw-h-[25px] tw-bg-[#ddd] tw-text-center tw-rounded-[5px]">
                N
              </p>
              <span className="tw-text-[#4a4a4a] tw-font-semibold tw-text-sm">
                Nguyễn Văn Nam PH 1 5 6 1 9
              </span>
            </div>
            <p className="tw-text-[#707070] tw-text-xs tw-font-semibold">
              20/7/2023 23:13
            </p>
          </div>
          <div className="tw-ml-10 tw-my-2 tw-p-2 tw-text-xs">
            <div className="tw-flex tw-items-center">
              <strong className="tw-text-[#363636]">Đánh giá: </strong>
              <Rating value={5} readOnly className="!tw-text-base" />
            </div>
            <div>
              <p className="tw-my-1">
                <strong className="tw-text-[#363636]">Nhận xét : </strong>
                Sản phẩm xịn quá
              </p>
            </div>
          </div>
        </div>
        <div className="tw-mb-4">
          <div className="tw-flex tw-justify-between tw-items-center ">
            <div className="tw-flex tw-items-center tw-gap-2">
              <p className="tw-text-[#1e1619] tw-font-semibold tw-w-[25px] tw-h-[25px] tw-bg-[#ddd] tw-text-center tw-rounded-[5px]">
                T
              </p>
              <span className="tw-text-[#4a4a4a] tw-font-semibold tw-text-sm">
                Thanh Tran
              </span>
            </div>
            <p className="tw-text-[#707070] tw-text-xs tw-font-semibold">
              10/4/2023 10:19
            </p>
          </div>
          <div className="tw-ml-10 tw-my-2 tw-p-2 tw-text-xs">
            <div className="tw-flex tw-items-center">
              <strong className="tw-text-[#363636]">Đánh giá: </strong>
              <Rating value={5} readOnly className="!tw-text-base" />
            </div>
            <div>
              <p className="tw-my-1">
                <strong className="tw-text-[#363636]">Nhận xét : </strong>
                Sản phẩm xịn quá
              </p>
            </div>
          </div>
        </div>
        <div className="tw-mb-4">
          <div className="tw-flex tw-justify-between tw-items-center ">
            <div className="tw-flex tw-items-center tw-gap-2">
              <p className="tw-text-[#1e1619] tw-font-semibold tw-w-[25px] tw-h-[25px] tw-bg-[#ddd] tw-text-center tw-rounded-[5px]">
                H
              </p>
              <span className="tw-text-[#4a4a4a] tw-font-semibold tw-text-sm">
                Hà Minh Tâm
              </span>
            </div>
            <p className="tw-text-[#707070] tw-text-xs tw-font-semibold">
              29/12/2022 19:07
            </p>
          </div>
          <div className="tw-ml-10 tw-my-2 tw-p-2 tw-text-xs">
            <div className="tw-flex tw-items-center">
              <strong className="tw-text-[#363636]">Đánh giá: </strong>
              <Rating value={5} readOnly className="!tw-text-base" />
            </div>
            <div>
              <p className="tw-my-1">
                <strong className="tw-text-[#363636]">Nhận xét : </strong>
                Cho mình hỏi mã thanh toán moca còn đc áp dụng ko
              </p>
            </div>
          </div>
        </div>
        <div className="tw-mb-4">
          <div className="tw-flex tw-justify-between tw-items-center ">
            <div className="tw-flex tw-items-center tw-gap-2">
              <p className="tw-text-[#1e1619] tw-font-semibold tw-w-[25px] tw-h-[25px] tw-bg-[#ddd] tw-text-center tw-rounded-[5px]">
                L
              </p>
              <span className="tw-text-[#4a4a4a] tw-font-semibold tw-text-sm">
                Lâm Hữu Phát
              </span>
            </div>
            <p className="tw-text-[#707070] tw-text-xs tw-font-semibold">
              20/7/2023 23:13
            </p>
          </div>
          <div className="tw-ml-10 tw-my-2 tw-p-2 tw-text-xs">
            <div className="tw-flex tw-items-center">
              <strong className="tw-text-[#363636]">Đánh giá: </strong>
              <Rating value={5} readOnly className="!tw-text-base" />
            </div>
            <div>
              <p className="tw-my-1">
                <strong className="tw-text-[#363636]">Nhận xét : </strong>
                Đã mua, chuẩn chính hãng
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-text-center">
        <a
          href=""
          className="tw-py-1 tw-shadow-cellphone tw-w-[300px] tw-block tw-m-auto tw-rounded-[10px] tw-border tw-border-[#ccc]"
        >
          Xem thêm
          <KeyboardArrowDownIcon />
        </a>
      </div>

      <div>
        <div>
          <p className="tw-mb-1 tw-text-xl tw-text-[#363636] tw-font-semibold">
            Hỏi và đáp
          </p>
          <div className="tw-flex tw-gap-2">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Xin mời để lại câu hỏi, CellphoneS sẽ trả lời lại trong 1h, các câu hỏi sau 22h - 8h sẽ được trả lời vào sáng hôm sau"
              className="tw-w-[calc(100%-80px)] tw-p-3 tw-border tw-border-[#ccc] tw-outline-none tw-h-32 tw-shadow-cellphone tw-rounded-[15px] tw-text-[#363636] tw-text-sm"
            ></textarea>
            <button className="tw-bg-[#d7000e] tw-text-white tw-flex tw-items-center tw-justify-center tw-gap-1 tw-py-[7px]  tw-rounded-lg tw-w-[70px] !tw-h-10">
              <svg
                height="15"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="tw-fill-white tw-w-4 tw-h-4 tw-text-base"
              >
                <path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path>
              </svg>
              Gửi
            </button>
          </div>
        </div>
        <div>
          <div>
            <div className="tw-flex tw-items-center tw-justify-between tw-my-[10px]">
              <div className="tw-flex tw-items-center tw-gap-2">
                <p className="tw-text-[#1e1619] tw-font-semibold tw-w-[25px] tw-h-[25px] tw-bg-[#ddd] tw-text-center tw-rounded-[5px]">
                  C
                </p>
                <span className="tw-text-[#4a4a4a] tw-font-semibold tw-text-sm">
                  Chung Duc
                </span>
              </div>
              <div className="tw-text-[#4a4a4a]  tw-font-semibold tw-text-xs tw-flex items-center tw-gap-1">
                <AccessTimeIcon className="!text-base" />3 ngày trước
              </div>
            </div>
            <div className="tw-ml-6 tw-p-[10px] tw-shadow-cellphone tw-rounded-lg tw-border tw-border-gray-200">
              <div>
                <p>Cáp sạc theo máy là bn w hả ad?</p>
              </div>
              <div>
                <button
                  type=""
                  className="tw-flex tw-items-center tw-text-[#d70018] tw-text-sm tw-ml-auto"
                >
                  <QuestionAnswerIcon className="tw-fill-[#d70018] !tw-text-sm" />
                  Trả lời
                </button>
              </div>
            </div>

            <div className="tw-ml-[25px] tw-mt-5">
              <div className="tw-list">
                <div className="tw-item">
                  <div className="tw-flex tw-items-center tw-justify-between tw-my-[10px]">
                    <div className="tw-flex tw-items-center tw-gap-2">
                      <div className="tw-w-[25px] tw-h-[25px]">
                        <svg
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <rect
                            width="25"
                            height="25"
                            fill="url(#pattern111)"
                          ></rect>{" "}
                          <defs>
                            <pattern
                              id="pattern111"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlinkHref="#image0_119_16"
                                transform="scale(0.00333333)"
                              ></use>
                            </pattern>{" "}
                            <image
                              id="image0_119_16"
                              width="300"
                              height="300"
                              xlinkHref="data:image/png;base64,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"
                            ></image>
                          </defs>
                        </svg>
                      </div>
                      <span className="tw-text-[#4a4a4a] tw-font-semibold tw-text-sm">
                        Quản trị viên
                      </span>
                      <span className="tw-py-[2px] tw-px-[6px] tw-rounded-md tw-bg-red-600 tw-text-white tw-text-[10px]">
                        QTV
                      </span>
                    </div>
                    <div className="tw-text-[#4a4a4a]  tw-font-semibold tw-text-xs tw-flex tw-items-center tw-gap-1">
                      <AccessTimeIcon className="!text-base" />3 ngày trước
                    </div>
                  </div>

                  <div className="tw-ml-6 tw-p-[10px] tw-shadow-cellphone tw-rounded-lg tw-border tw-border-gray-200">
                    <div className="tw-text-[13px] tw-text-[#4a4a4a]">
                      <div>Dạ Cellphones xin chào anh Chung Duc</div>
                      <div>
                        Samsung Galaxy S22 Ultra (8GB - 128GB) giá hiện tại
                        17.990.000 ( HN ) , bên trong hộp có dây sạc kèm theo
                        máy , công suất dây sạc hãng chưa công bố thông tin nên
                        hiện shop chưa có thông tin cụ thể ạ
                      </div>
                      <div>
                        Mình ở khu vực tỉnh thành nào , em kiểm tra và hỗ trợ
                        mình đặt hàng ạ
                      </div>
                      <div>Thân mến</div>
                    </div>
                    <div>
                      <button
                        type=""
                        className="tw-flex tw-items-center tw-text-[#d70018] tw-text-sm tw-ml-auto"
                      >
                        <QuestionAnswerIcon className="tw-fill-[#d70018] !tw-text-sm" />
                        Trả lời
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="tw-flex tw-items-center tw-justify-between tw-my-[10px]">
              <div className="tw-flex tw-items-center tw-gap-2">
                <p className="tw-text-[#1e1619] tw-font-semibold tw-w-[25px] tw-h-[25px] tw-bg-[#ddd] tw-text-center tw-rounded-[5px]">
                  N
                </p>
                <span className="tw-text-[#4a4a4a] tw-font-semibold tw-text-sm">
                  Nhật Tuấn
                </span>
              </div>
              <div className="tw-text-[#4a4a4a]  tw-font-semibold tw-text-xs tw-flex items-center tw-gap-1">
                <AccessTimeIcon className="!tw-text-base" />3 ngày trước
              </div>
            </div>
            <div className="tw-ml-6 tw-p-[10px] tw-shadow-cellphone tw-rounded-lg tw-border tw-border-gray-200">
              <div>
                <p>
                  Mua gói bảo hành rơi vỡ thì khi bị rơi muốn đổi máy khác ram
                  cao hơn có cần trả thêm nhiều k ạ
                </p>
              </div>
              <div>
                <button
                  type=""
                  className="tw-flex tw-items-center tw-text-[#d70018] tw-text-sm tw-ml-auto"
                >
                  <QuestionAnswerIcon className="tw-fill-[#d70018] !tw-text-sm" />
                  Trả lời
                </button>
              </div>
            </div>

            <div className="tw-ml-[25px] tw-mt-5">
              <div className="list">
                <div className="item">
                  <div className="tw-flex tw-items-center tw-justify-between tw-my-[10px]">
                    <div className="tw-flex tw-items-center tw-gap-2">
                      <div className="tw-w-[25px] tw-h-[25px]">
                        <svg
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <rect
                            width="25"
                            height="25"
                            fill="url(#pattern111)"
                          ></rect>{" "}
                          <defs>
                            <pattern
                              id="pattern111"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlinkHref="#image0_119_16"
                                transform="scale(0.00333333)"
                              ></use>
                            </pattern>{" "}
                            <image
                              id="image0_119_16"
                              width="300"
                              height="300"
                              xlinkHref="data:image/png;base64,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"
                            ></image>
                          </defs>
                        </svg>
                      </div>
                      <span className="tw-text-[#4a4a4a] tw-font-semibold tw-text-sm">
                        Quản trị viên
                      </span>
                      <span className="tw-py-[2px] tw-px-[6px] tw-rounded-md tw-bg-red-600 tw-text-white tw-text-[10px]">
                        QTV
                      </span>
                    </div>
                    <div className="tw-text-[#4a4a4a]  tw-font-semibold tw-text-xs tw-flex tw-items-center gap-1">
                      <AccessTimeIcon className="!text-base" />3 ngày trước
                    </div>
                  </div>

                  <div className="tw-ml-6 tw-p-[10px] tw-shadow-cellphone tw-rounded-lg tw-border tw-border-gray-200">
                    <div className="tw-text-[13px] tw-text-[#4a4a4a]">
                      <div>Cellphones Xin Chào Anh Nhật Tuấn!</div>
                      <div>
                        Tên sản phẩm: SAMSUNG GALAXY S22 ULTRA 8GB 128GB
                      </div>
                      <div>
                        Loại 1: Máy hoạt động bình thường, màn đẹp, thân máy
                        đẹp.
                      </div>
                      <div>
                        Dạ Em gửi Giá tham khảo ,mình mang máy đến cửa hàng để
                        thẩm định dựa trên tình hình thực tế sản phẩm nhé!
                      </div>
                      <div>
                        Không biết mình muốn đổi sang dòng máy nào để em tiện
                        kiểm tra giá cần thêm nhé
                      </div>
                      <div>Mong nhận được phản hồi từ mình</div>
                      <div>Thân mến</div>
                    </div>
                    <div>
                      <button
                        type=""
                        className="tw-flex tw-items-center tw-text-[#d70018] tw-text-sm tw-ml-auto"
                      >
                        <QuestionAnswerIcon className="tw-fill-[#d70018] !tw-text-sm" />
                        Trả lời
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="tw-flex tw-items-center tw-justify-between tw-my-[10px]">
              <div className="tw-flex tw-items-center tw-gap-2">
                <p className="tw-text-[#1e1619] tw-font-semibold tw-w-[25px] tw-h-[25px] tw-bg-[#ddd] tw-text-center tw-rounded-[5px]">
                  C
                </p>
                <span className="tw-text-[#4a4a4a] tw-font-semibold tw-text-sm">
                  Chung Duc
                </span>
              </div>
              <div className="tw-text-[#4a4a4a]  tw-font-semibold tw-text-xs tw-flex tw-items-center tw-gap-1">
                <AccessTimeIcon className="!tw-text-base" />3 ngày trước
              </div>
            </div>
            <div className="tw-ml-6 tw-p-[10px] tw-shadow-cellphone tw-rounded-lg tw-border tw-border-gray-200">
              <div>
                <p>Cáp sạc theo máy là bn w hả ad?</p>
              </div>
              <div>
                <button
                  type=""
                  className="tw-flex tw-items-center tw-text-[#d70018] tw-text-sm tw-ml-auto"
                >
                  <QuestionAnswerIcon className="tw-fill-[#d70018] !tw-text-sm" />
                  Trả lời
                </button>
              </div>
            </div>

            <div className="tw-ml-[25px] tw-mt-5">
              <div className="list">
                <div className="item">
                  <div className="tw-flex tw-items-center tw-justify-between tw-my-[10px]">
                    <div className="tw-flex tw-items-center tw-gap-2">
                      <div className="tw-w-[25px] tw-h-[25px]">
                        <svg
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <rect
                            width="25"
                            height="25"
                            fill="url(#pattern111)"
                          ></rect>{" "}
                          <defs>
                            <pattern
                              id="pattern111"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlinkHref="#image0_119_16"
                                transform="scale(0.00333333)"
                              ></use>
                            </pattern>{" "}
                            <image
                              id="image0_119_16"
                              width="300"
                              height="300"
                              xlinkHref="data:image/png;base64,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"
                            ></image>
                          </defs>
                        </svg>
                      </div>
                      <span className="tw-text-[#4a4a4a] tw-font-semibold tw-text-sm">
                        Quản trị viên
                      </span>
                      <span className="tw-py-[2px] tw-px-[6px] tw-rounded-md tw-bg-red-600 tw-text-white tw-text-[10px]">
                        QTV
                      </span>
                    </div>
                    <div className="tw-text-[#4a4a4a]  tw-font-semibold tw-text-xs tw-flex tw-items-center tw-gap-1">
                      <AccessTimeIcon className="!tw-text-base" />3 ngày trước
                    </div>
                  </div>

                  <div className="tw-ml-6 tw-p-[10px] tw-shadow-cellphone tw-rounded-lg tw-border tw-border-gray-200">
                    <div className="tw-text-[13px] tw-text-[#4a4a4a]">
                      <div>Dạ Cellphones xin chào anh Chung Duc</div>
                      <div>
                        Samsung Galaxy S22 Ultra (8GB - 128GB) giá hiện tại
                        17.990.000 ( HN ) , bên trong hộp có dây sạc kèm theo
                        máy , công suất dây sạc hãng chưa công bố thông tin nên
                        hiện shop chưa có thông tin cụ thể ạ
                      </div>
                      <div>
                        Mình ở khu vực tỉnh thành nào , em kiểm tra và hỗ trợ
                        mình đặt hàng ạ
                      </div>
                      <div>Thân mến</div>
                    </div>
                    <div>
                      <button
                        type=""
                        className="tw-flex tw-items-center tw-text-[#d70018] tw-text-sm tw-ml-auto"
                      >
                        <QuestionAnswerIcon className="tw-fill-[#d70018] !tw-text-sm" />
                        Trả lời
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tw-text-center tw-mt-[15px]">
          <a
            href=""
            className="tw-py-1 tw-shadow-cellphone tw-w-[300px] tw-block tw-m-auto tw-rounded-[10px] tw-border tw-border-[#ccc]"
          >
            Xem thêm 949 bình luận
            <KeyboardArrowDownIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoxReview;
