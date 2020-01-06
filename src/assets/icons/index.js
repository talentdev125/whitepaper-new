import React from 'react'
import PropTypes from 'prop-types'

const MessageIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.2462 9.17466C31.2427 9.14873 31.2388 9.12378 31.231 9.09834C31.2227 9.07045 31.2114 9.04501 31.1987 9.01908C31.1919 9.0049 31.1894 8.98973 31.1811 8.97603C31.1757 8.96722 31.1669 8.96135 31.1606 8.95304C31.1444 8.93053 31.1253 8.91096 31.1053 8.8909C31.0852 8.87085 31.0652 8.85225 31.0422 8.83611C31.0338 8.83024 31.0285 8.82192 31.0201 8.81703C31.0064 8.80871 30.9913 8.80676 30.9771 8.79991C30.9502 8.7867 30.9238 8.77544 30.8954 8.76713C30.8714 8.76077 30.8479 8.75734 30.8235 8.75441C30.7946 8.75098 30.7667 8.74903 30.7379 8.75049C30.7109 8.75196 30.685 8.75734 30.6586 8.7637C30.642 8.76762 30.6248 8.76615 30.6082 8.77202L9.08179 16.1106C8.88707 16.1761 8.75449 16.3576 8.75058 16.5636C8.74666 16.7696 8.87191 16.956 9.06467 17.0298L19.1219 20.8943L23.4678 30.955C23.5456 31.1345 23.7227 31.25 23.9169 31.25C23.9252 31.25 23.9331 31.25 23.9414 31.2495C24.1454 31.2392 24.321 31.1037 24.3832 30.9095L31.2325 9.38308C31.2374 9.36791 31.2359 9.35225 31.2388 9.3366C31.2447 9.3092 31.2491 9.28278 31.2501 9.2549C31.2511 9.2275 31.2496 9.20157 31.2462 9.17466ZM10.6752 16.6003L28.9321 10.3762L19.368 19.9403L10.6752 16.6003ZM23.847 29.3659L20.07 20.6223L29.6899 11.002L23.847 29.3659Z" fill="white" stroke="white" strokeWidth="0.5" />
    <path d="M16.4346 23.5653C16.2433 23.3741 15.9341 23.3741 15.7428 23.5653L8.89347 30.4147C8.70218 30.606 8.70218 30.9151 8.89347 31.1064C8.98887 31.2018 9.11411 31.2498 9.23936 31.2498C9.3646 31.2498 9.48985 31.2018 9.58525 31.1064L16.4346 24.2571C16.6259 24.0658 16.6259 23.7566 16.4346 23.5653Z" fill="white" stroke="white" strokeWidth="0.5" />
    <path d="M17.7 26.9901L14.2753 30.4148C14.084 30.6061 14.084 30.9153 14.2753 31.1066C14.3707 31.202 14.496 31.2499 14.6212 31.2499C14.7464 31.2499 14.8717 31.202 14.9671 31.1066L18.3917 27.6819C18.583 27.4906 18.583 27.1814 18.3917 26.9901C18.2005 26.7989 17.8913 26.7989 17.7 26.9901Z" fill="white" stroke="white" strokeWidth="0.5" />
    <path d="M9.23936 25.8686C9.3646 25.8686 9.48985 25.8206 9.58525 25.7252L13.0099 22.3006C13.2012 22.1093 13.2012 21.8001 13.0099 21.6088C12.8186 21.4175 12.5094 21.4175 12.3181 21.6088L8.89347 25.0335C8.70218 25.2248 8.70218 25.5339 8.89347 25.7252C8.98887 25.8206 9.11411 25.8686 9.23936 25.8686Z" fill="white" stroke="white" strokeWidth="0.5" />
  </svg>
)

MessageIcon.propTypes = {
  className: PropTypes.string
}

const UpArrowIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 10 6" fill="transparent">
    <path d="M9 5L5 0.999999L1 5" stroke="#00D1C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

UpArrowIcon.propTypes = {
  className: PropTypes.string
}

const InfoIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="transparent" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5Z" fill="#F5F7FA" stroke="#00D1C1" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.48606 4.85723C9.48606 5.33066 9.10226 5.71445 8.62883 5.71445C8.1554 5.71445 7.7716 5.33066 7.7716 4.85723C7.7716 4.38379 8.1554 4 8.62883 4C9.10226 4 9.48606 4.38379 9.48606 4.85723ZM6.91441 7.42891C6.91441 7.74453 7.17027 8.00039 7.48589 8.00039H7.87123L6.9364 11.2723C6.83209 11.6374 7.10621 12.0008 7.48589 12.0008H8.62886C8.94449 12.0008 9.20035 11.7449 9.20035 11.4293C9.20035 11.1137 8.94449 10.8578 8.62886 10.8578H8.24353L9.17836 7.58591C9.28267 7.22083 9.00855 6.85742 8.62886 6.85742H7.48589C7.17027 6.85742 6.91441 7.11328 6.91441 7.42891Z" fill="#00D1C1" />
  </svg>
)

InfoIcon.propTypes = {
  className: PropTypes.string
}

const InfoOIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z" fill="#F5F7FA" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.48563 4.85723C9.48563 5.33066 9.10184 5.71445 8.6284 5.71445C8.15497 5.71445 7.77118 5.33066 7.77118 4.85723C7.77118 4.38379 8.15497 4 8.6284 4C9.10184 4 9.48563 4.38379 9.48563 4.85723ZM6.91398 7.42891C6.91398 7.74453 7.16985 8.00039 7.48547 8.00039H7.8708L6.93597 11.2723C6.83166 11.6374 7.10579 12.0008 7.48547 12.0008H8.62844C8.94406 12.0008 9.19992 11.7449 9.19992 11.4293C9.19992 11.1137 8.94406 10.8578 8.62844 10.8578H8.2431L9.17793 7.58591C9.28224 7.22083 9.00812 6.85742 8.62844 6.85742H7.48547C7.16985 6.85742 6.91398 7.11328 6.91398 7.42891Z" fill="#00D1C1" />
  </svg>
)

InfoOIcon.propTypes = {
  className: PropTypes.string
}

const CloseIcon = ({ className, onClick }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" fill="white" onClick={onClick} />
    <path fillRule="evenodd" onClick={onClick} clipRule="evenodd" d="M13.785 7.28033C14.0779 6.98743 14.0779 6.51256 13.785 6.21967C13.4921 5.92678 13.0173 5.92678 12.7244 6.21967L10.004 8.94009L7.28361 6.21967C6.99072 5.92678 6.51584 5.92678 6.22295 6.21967C5.93005 6.51256 5.93005 6.98743 6.22294 7.28033L8.94328 10.0007L6.22284 12.7212C5.92995 13.0141 5.92995 13.4889 6.22285 13.7818C6.51574 14.0747 6.99062 14.0747 7.28351 13.7818L10.0039 11.0614L12.7243 13.7818C13.0172 14.0747 13.492 14.0747 13.7849 13.7818C14.0778 13.4889 14.0778 13.0141 13.7849 12.7212L11.0646 10.0008L13.785 7.28033Z" fill="#BDBDBD" />
  </svg>
)

CloseIcon.propTypes = {
  className : PropTypes.string,
  onClick   : PropTypes.func
}

const BackArrowIcon = ({ className, color, onClick }) => (
  <svg className={className} viewBox="0 0 28 28" fill="transparent" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" fill="white" onClick={onClick} />
    <path d="M16.4852 6L7.99995 14.4853L16.4852 22.9706" stroke={color} strokeWidth="3" strokeLinecap="round" onClick={onClick}  />
  </svg>
)

BackArrowIcon.propTypes = {
  className : PropTypes.string,
  color     : PropTypes.string,
  onClick   : PropTypes.func
}


const LinkIcon = ({ className, color }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.8943 3.10635C15.4192 1.63125 13.0188 1.63183 11.5434 3.10635L8.86793 5.7818C8.64061 6.00912 8.64061 6.37761 8.86793 6.60493C9.09525 6.83225 9.46373 6.83225 9.69105 6.60493L12.3665 3.92948C12.8587 3.43758 13.5165 3.16631 14.2185 3.16631C14.9209 3.16631 15.5787 3.43758 16.0709 3.92977C16.563 4.42196 16.8343 5.07976 16.8343 5.78209C16.8343 6.48414 16.563 7.14194 16.0709 7.63412L12.5726 11.1333C11.5509 12.1543 9.88927 12.1543 8.86764 11.1333C8.64032 10.906 8.27183 10.906 8.04451 11.1333C7.81719 11.3606 7.81719 11.7294 8.04451 11.9564C8.78207 12.694 9.75101 13.0627 10.72 13.0627C11.6889 13.0627 12.6579 12.694 13.3954 11.9564L16.8943 8.45754C17.6065 7.7456 17.9989 6.79528 17.9989 5.78209C17.9989 4.76861 17.6065 3.81858 16.8943 3.10635Z" fill={color} />
    <path d="M9.89721 13.8084L7.63333 16.0723C7.14114 16.5645 6.48334 16.8358 5.78101 16.8358C5.07896 16.8358 4.42087 16.5645 3.92868 16.0723C2.90735 15.051 2.90735 13.389 3.92868 12.3677L7.22177 9.07461C7.71395 8.58271 8.37175 8.31144 9.07409 8.31144C9.77613 8.31144 10.4339 8.58271 10.9261 9.07461C11.1534 9.30193 11.5219 9.30193 11.7492 9.07461C11.9766 8.84729 11.9766 8.4788 11.7492 8.25148C10.2744 6.77667 7.87404 6.77638 6.39835 8.25148L3.10527 11.5449C2.39333 12.2568 2.00098 13.2071 2.00098 14.2203C2.00098 15.2332 2.39333 16.1835 3.10556 16.8955C3.8175 17.6077 4.76782 18 5.78071 18C6.7939 18 7.74422 17.6077 8.45616 16.8955L10.72 14.6316C10.9474 14.4043 10.9474 14.0358 10.72 13.8084C10.4927 13.5811 10.1245 13.5811 9.89721 13.8084Z" fill={color} />
  </svg>
)

LinkIcon.propTypes = {
  className : PropTypes.string,
  color     : PropTypes.string
}

const TransIcon = ({ className, type }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {type === 'deposit' && (
      <>
        <circle cx="24" cy="24" r="15" stroke="#5D88FD" strokeWidth="2" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.7091 27.1477C28.0994 26.757 28.0966 26.1264 27.7027 25.7392C27.3089 25.352 26.6732 25.3549 26.2829 25.7457L24.9994 27.0306L24.9994 18C24.9994 17.4477 24.5517 17 23.9994 17C23.4471 17 22.9994 17.4477 22.9994 18L22.9994 27.0305L21.716 25.7456C21.3257 25.3549 20.6901 25.352 20.2962 25.7392C19.9023 26.1264 19.8994 26.7571 20.2897 27.1478L23.2862 30.1478L23.9994 30.8617L24.7012 30.1591C24.7051 30.1553 24.7088 30.1515 24.7126 30.1477L27.7091 27.1477Z"
          fill="#5D88FD"
        />
      </>
    )}
    {type === 'withdraw' && (
      <>
        <circle cx="24" cy="24" r="15" stroke="#5D88FD" strokeWidth="2" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.7091 27.1477C28.0994 26.757 28.0966 26.1264 27.7027 25.7392C27.3089 25.352 26.6732 25.3549 26.2829 25.7457L24.9994 27.0306L24.9994 18C24.9994 17.4477 24.5517 17 23.9994 17C23.4471 17 22.9994 17.4477 22.9994 18L22.9994 27.0305L21.716 25.7456C21.3257 25.3549 20.6901 25.352 20.2962 25.7392C19.9023 26.1264 19.8994 26.7571 20.2897 27.1478L23.2862 30.1478L23.9994 30.8617L24.7012 30.1591C24.7051 30.1553 24.7088 30.1515 24.7126 30.1477L27.7091 27.1477Z"
          fill="#5D88FD"
          style={{
            transform       : 'rotate(180deg)',
            transformOrigin : 'center'
          }}
        />
      </>
    )}
    {type === 'invest' && (
      <>
        <circle cx="24" cy="24" r="15" stroke="#00D1C1" strokeWidth="2" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.218 20.2212C26.8273 19.8309 26.1967 19.8337 25.8095 20.2276C25.4223 20.6214 25.4252 21.2571 25.816 21.6474L27.1009 22.9309L18.0703 22.9309C17.518 22.9309 17.0703 23.3786 17.0703 23.9309C17.0703 24.4832 17.518 24.9309 18.0703 24.9309L27.1008 24.9309L25.8159 26.2143C25.4252 26.6046 25.4224 27.2402 25.8096 27.6341C26.1968 28.028 26.8274 28.0309 27.2181 27.6406L30.2181 24.6441L30.932 23.9309L30.2294 23.2291C30.2256 23.2252 30.2218 23.2215 30.218 23.2177L27.218 20.2212Z"
          fill="#00D1C1"
        />
      </>
    )}
    {type === 'sell' && (
      <>
        <circle cx="24" cy="24" r="15" stroke="#FF5722" strokeWidth="2" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.782 27.6405C21.1727 28.0308 21.8033 28.028 22.1905 27.6341C22.5777 27.2403 22.5748 26.6046 22.184 26.2143L20.8991 24.9308L29.9297 24.9308C30.482 24.9308 30.9297 24.4831 30.9297 23.9308C30.9297 23.3785 30.482 22.9308 29.9297 22.9308L20.8992 22.9308L22.1841 21.6474C22.5748 21.2571 22.5776 20.6215 22.1904 20.2276C21.8032 19.8337 21.1726 19.8308 20.7819 20.221L17.7819 23.2176L17.068 23.9308L17.7706 24.6326C17.7744 24.6364 17.7782 24.6402 17.782 24.644L20.782 27.6405Z"
          fill="#FF5722"
        />
      </>
    )}
  </svg>
)

TransIcon.propTypes = {
  className : PropTypes.string,
  type      : PropTypes.string
}

const CopyIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 3C8.5 2.72386 8.72386 2.5 9 2.5H16C16.2761 2.5 16.5 2.72386 16.5 3V12C16.5 12.2761 16.2761 12.5 16 12.5H15H14V13.5H15H16C16.8284 13.5 17.5 12.8284 17.5 12V3C17.5 2.17157 16.8284 1.5 16 1.5H9C8.17157 1.5 7.5 2.17157 7.5 3V4V5H8.5V4V3ZM12 7H11H5H4V8V16V17H5H11H12V16V8V7ZM4 6C3.44772 6 3 6.44771 3 7V17C3 17.5523 3.44772 18 4 18H12C12.5523 18 13 17.5523 13 17V7C13 6.44772 12.5523 6 12 6H4Z"
      fill="#00D1C1"
    />
  </svg>
)

CopyIcon.propTypes = {
  className: PropTypes.string,
}

const PaperPlaneIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.997 2.30198C17.9946 2.28354 17.9918 2.2658 17.9862 2.24771C17.9803 2.22788 17.9723 2.20979 17.9633 2.19135C17.9584 2.18126 17.9566 2.17047 17.9507 2.16073C17.9469 2.15447 17.9406 2.1503 17.9361 2.14438C17.9246 2.12838 17.9111 2.11446 17.8968 2.1002C17.8825 2.08593 17.8683 2.07271 17.8519 2.06123C17.846 2.05706 17.8422 2.05114 17.8363 2.04767C17.8265 2.04175 17.8157 2.04036 17.8057 2.03549C17.7865 2.0261 17.7677 2.01809 17.7476 2.01218C17.7305 2.00766 17.7138 2.00522 17.6964 2.00313C17.6759 2.0007 17.6561 1.99931 17.6355 2.00035C17.6164 2.00139 17.598 2.00522 17.5792 2.00974C17.5673 2.01253 17.5552 2.01148 17.5433 2.01566L2.23559 7.23418C2.09713 7.2808 2.00285 7.40987 2.00006 7.55634C1.99728 7.70281 2.08634 7.83536 2.22342 7.88789L9.37527 10.636L12.4657 17.7902C12.521 17.9179 12.6469 18 12.7851 18C12.791 18 12.7965 18 12.8025 17.9997C12.9475 17.9923 13.0724 17.896 13.1166 17.7579L17.9873 2.45019C17.9907 2.4394 17.9897 2.42827 17.9918 2.41714C17.996 2.39765 17.9991 2.37887 17.9998 2.35904C18.0005 2.33955 17.9994 2.32112 17.997 2.30198ZM3.36871 7.58243L16.3514 3.15643L9.55026 9.95756L3.36871 7.58243ZM12.7353 16.6602L10.0495 10.4425L16.8903 3.60139L12.7353 16.6602Z" />
    <path d="M17.997 2.30198L18.245 2.27042L18.2449 2.26924L17.997 2.30198ZM17.9862 2.24771L17.7466 2.31917L17.7473 2.32123L17.9862 2.24771ZM17.9633 2.19135L17.7381 2.30005L17.7388 2.30146L17.9633 2.19135ZM17.9507 2.16073L18.1644 2.031L18.164 2.03037L17.9507 2.16073ZM17.9361 2.14438L17.7329 2.29018L17.7375 2.29624L17.9361 2.14438ZM17.8968 2.1002L18.0736 1.92342V1.92342L17.8968 2.1002ZM17.8519 2.06123L17.7078 2.26548L17.7083 2.26584L17.8519 2.06123ZM17.8363 2.04767L17.7065 2.26139L17.7095 2.26315L17.8363 2.04767ZM17.8057 2.03549L17.6955 2.25991L17.697 2.26063L17.8057 2.03549ZM17.7476 2.01218L17.8179 1.77219L17.8117 1.77054L17.7476 2.01218ZM17.6964 2.00313L17.7262 1.75491L17.7259 1.75488L17.6964 2.00313ZM17.6355 2.00035L17.6228 1.75067L17.6219 1.75072L17.6355 2.00035ZM17.5792 2.00974L17.6364 2.2531L17.6377 2.2528L17.5792 2.00974ZM17.5433 2.01566L17.624 2.2523L17.6265 2.25141L17.5433 2.01566ZM2.23559 7.23418L2.31537 7.47112L2.31626 7.47081L2.23559 7.23418ZM2.00006 7.55634L1.75011 7.55159L2.00006 7.55634ZM2.22342 7.88789L2.31309 7.65452L2.31288 7.65445L2.22342 7.88789ZM9.37527 10.636L9.60477 10.5368L9.56308 10.4403L9.46493 10.4026L9.37527 10.636ZM12.4657 17.7902L12.2362 17.8894L12.2363 17.8896L12.4657 17.7902ZM12.8025 17.9997L12.7899 17.75L12.7878 17.7501L12.8025 17.9997ZM13.1166 17.7579L13.3547 17.834L13.3548 17.8337L13.1166 17.7579ZM17.9873 2.45019L17.7493 2.37344L17.749 2.37439L17.9873 2.45019ZM17.9918 2.41714L17.7473 2.36473L17.7461 2.37108L17.9918 2.41714ZM17.9998 2.35904L17.7499 2.35012L17.7499 2.35027L17.9998 2.35904ZM3.36871 7.58243L3.28805 7.34581L2.63514 7.56839L3.27905 7.8158L3.36871 7.58243ZM16.3514 3.15643L16.5282 3.3332L16.2708 2.9198L16.3514 3.15643ZM9.55026 9.95756L9.46059 10.1909L9.6122 10.2492L9.72704 10.1343L9.55026 9.95756ZM12.7353 16.6602L12.5058 16.7594L12.7709 17.373L12.9735 16.736L12.7353 16.6602ZM10.0495 10.4425L9.87272 10.2658L9.75267 10.3858L9.82 10.5417L10.0495 10.4425ZM16.8903 3.60139L17.1286 3.67719L16.7135 3.42462L16.8903 3.60139ZM18.2449 2.26924C18.2421 2.24812 18.2372 2.2132 18.2252 2.17419L17.7473 2.32123C17.7467 2.31946 17.7467 2.31905 17.7471 2.32101C17.7475 2.32331 17.7481 2.32708 17.7492 2.33472L18.2449 2.26924ZM18.2258 2.17625C18.2141 2.13723 18.1993 2.10497 18.1877 2.08124L17.7388 2.30146C17.7453 2.3146 17.7465 2.31853 17.7466 2.31916L18.2258 2.17625ZM18.1884 2.08265C18.1921 2.09037 18.1943 2.09626 18.195 2.09811C18.195 2.0982 18.196 2.10106 18.1937 2.09446C18.1913 2.08726 18.1823 2.06035 18.1644 2.031L17.737 2.29047C17.7307 2.28006 17.7266 2.27115 17.7242 2.26538C17.7219 2.26002 17.7206 2.25625 17.721 2.25736C17.7211 2.25755 17.7212 2.25783 17.7214 2.25845C17.7216 2.25894 17.7219 2.25989 17.7222 2.2608C17.7228 2.26268 17.7239 2.26573 17.7252 2.26925C17.7277 2.27626 17.732 2.28728 17.7381 2.30005L18.1884 2.08265ZM18.164 2.03037C18.1538 2.01353 18.1433 2.00055 18.1355 1.99158C18.1279 1.98299 18.1213 1.97643 18.119 1.97417C18.1183 1.97352 18.1177 1.97293 18.1174 1.97264C18.1172 1.97246 18.1171 1.97236 18.117 1.97227C18.1169 1.97218 18.1169 1.97216 18.1169 1.97216C18.1169 1.97216 18.1171 1.97238 18.1175 1.97273C18.1179 1.97309 18.1184 1.97366 18.1191 1.97438C18.1217 1.97704 18.1277 1.98341 18.1347 1.99253L17.7375 2.29624C17.7468 2.30831 17.7553 2.31742 17.7604 2.32273C17.763 2.32542 17.7653 2.32762 17.7665 2.32885C17.7671 2.32946 17.7677 2.33004 17.768 2.3303C17.7684 2.33064 17.7684 2.33069 17.7684 2.33069C17.7684 2.33068 17.7674 2.3297 17.766 2.32823C17.7645 2.32672 17.7622 2.3243 17.7595 2.32116C17.754 2.31492 17.7458 2.30481 17.7374 2.2911L18.164 2.03037ZM18.1393 1.99865C18.1145 1.9642 18.0876 1.93741 18.0736 1.92342L17.72 2.27698C17.7268 2.28379 17.7302 2.28731 17.7326 2.28991C17.7347 2.2922 17.7344 2.29205 17.733 2.29011L18.1393 1.99865ZM18.0736 1.92342C18.0556 1.90547 18.0295 1.88042 17.9956 1.85663L17.7083 2.26584C17.7071 2.26501 17.7095 2.2664 17.72 2.27698L18.0736 1.92342ZM17.9961 1.85699C18.0068 1.86455 18.0144 1.87139 18.0183 1.87497C18.0211 1.87763 18.0243 1.8808 18.0209 1.87741C18.0192 1.87578 18.0125 1.86903 18.0039 1.86153C17.9947 1.85357 17.981 1.84274 17.963 1.83218L17.7095 2.26315C17.6945 2.25433 17.6835 2.24555 17.6769 2.2398C17.6736 2.23693 17.671 2.23454 17.6695 2.2331C17.6681 2.23173 17.6671 2.23076 17.6673 2.23097C17.6675 2.23116 17.6675 2.2311 17.668 2.23169C17.6685 2.2321 17.6691 2.23279 17.6699 2.23359C17.6715 2.23516 17.6741 2.23772 17.6774 2.24071C17.6838 2.24668 17.6941 2.25583 17.7078 2.26548L17.9961 1.85699ZM17.966 1.83397C17.9348 1.81502 17.906 1.80594 17.899 1.80362C17.8924 1.80146 17.8955 1.8025 17.8962 1.80277C17.8987 1.80364 17.9056 1.80611 17.9143 1.81035L17.697 2.26063C17.7108 2.2673 17.7228 2.27177 17.7304 2.27446C17.7342 2.27581 17.7375 2.2769 17.7396 2.27756C17.7406 2.27789 17.7416 2.27821 17.7421 2.27838C17.7428 2.2786 17.743 2.27869 17.7432 2.27875C17.7444 2.27913 17.7401 2.27778 17.7342 2.27535C17.7277 2.27271 17.7179 2.26827 17.7065 2.26137L17.966 1.83397ZM17.9158 1.81107C17.8891 1.79796 17.8564 1.78357 17.8179 1.77227L17.6772 2.25209C17.6791 2.25262 17.6839 2.25423 17.6955 2.25991L17.9158 1.81107ZM17.8117 1.77054C17.7774 1.76145 17.7468 1.75739 17.7262 1.75491L17.6666 2.25135C17.6808 2.25305 17.6836 2.25386 17.6835 2.25382L17.8117 1.77054ZM17.7259 1.75488C17.698 1.75157 17.6628 1.74864 17.6228 1.75067L17.6482 2.25003C17.6493 2.24997 17.6538 2.24983 17.667 2.25139L17.7259 1.75488ZM17.6219 1.75072C17.5794 1.75304 17.543 1.76131 17.5207 1.76669L17.6377 2.2528C17.6449 2.25106 17.6486 2.2503 17.6507 2.24993C17.6526 2.2496 17.6518 2.24984 17.6491 2.24998L17.6219 1.75072ZM17.5219 1.76639C17.5314 1.76417 17.5384 1.76328 17.5405 1.76304C17.5415 1.76291 17.542 1.76286 17.5412 1.76295C17.5407 1.763 17.5403 1.76303 17.5393 1.76313C17.5385 1.76321 17.5373 1.76332 17.536 1.76346C17.5276 1.76431 17.4961 1.76721 17.4601 1.77991L17.6265 2.25141C17.6137 2.25593 17.603 2.25826 17.5961 2.25949C17.5897 2.26063 17.5853 2.26102 17.5865 2.2609C17.5867 2.26088 17.587 2.26085 17.5877 2.26079C17.5882 2.26073 17.5893 2.26063 17.5903 2.26053C17.5925 2.26032 17.596 2.25996 17.6 2.25947C17.6081 2.25851 17.6211 2.25671 17.6364 2.2531L17.5219 1.76639ZM17.4627 1.77903L2.15493 6.99756L2.31626 7.47081L17.624 2.25229L17.4627 1.77903ZM2.15582 6.99725C1.91677 7.07773 1.75489 7.3001 1.75011 7.55159L2.25002 7.56109C2.25081 7.51964 2.27748 7.48387 2.31536 7.47111L2.15582 6.99725ZM1.75011 7.55159C1.74533 7.80316 1.8984 8.03106 2.13395 8.12133L2.31288 7.65445C2.27429 7.63965 2.24923 7.60245 2.25002 7.56109L1.75011 7.55159ZM2.13375 8.12125L9.2856 10.8693L9.46493 10.4026L2.31309 7.65452L2.13375 8.12125ZM9.14576 10.7351L12.2362 17.8894L12.6952 17.6911L9.60477 10.5368L9.14576 10.7351ZM12.2363 17.8896C12.3313 18.109 12.5476 18.25 12.7851 18.25V17.75C12.7463 17.75 12.7107 17.7268 12.6951 17.6908L12.2363 17.8896ZM12.7851 18.25C12.79 18.25 12.8028 18.2501 12.8171 18.2492L12.7878 17.7501C12.7894 17.75 12.7903 17.75 12.79 17.75C12.7893 17.75 12.7883 17.75 12.7851 17.75V18.25ZM12.815 18.2493C13.0643 18.2368 13.2789 18.0711 13.3547 17.834L12.8785 17.6817C12.866 17.7209 12.8308 17.7479 12.7899 17.75L12.815 18.2493ZM13.3548 17.8337L18.2255 2.52599L17.749 2.37439L12.8784 17.6821L13.3548 17.8337ZM18.2252 2.52694C18.2364 2.4921 18.2386 2.46203 18.2393 2.45341C18.2395 2.45117 18.2396 2.44842 18.2397 2.44797C18.2398 2.44691 18.2397 2.44717 18.2397 2.44788C18.2396 2.44926 18.239 2.45514 18.2375 2.46319L17.7461 2.37108C17.7435 2.3847 17.7423 2.39615 17.7417 2.40308C17.7414 2.40657 17.7412 2.4096 17.741 2.41131C17.7409 2.41364 17.7409 2.41365 17.7408 2.41418C17.7408 2.4148 17.7411 2.41026 17.7421 2.40374C17.7432 2.3968 17.7452 2.38617 17.7493 2.37344L18.2252 2.52694ZM18.2362 2.46952C18.2419 2.44327 18.2482 2.40842 18.2496 2.36781L17.7499 2.35027C17.75 2.34931 17.7501 2.35204 17.7473 2.36475L18.2362 2.46952ZM18.2496 2.36795C18.2509 2.33327 18.2489 2.3012 18.245 2.27043L17.749 2.33354C17.75 2.34103 17.7501 2.34584 17.7499 2.35012L18.2496 2.36795ZM3.44938 7.81906L16.4321 3.39305L16.2708 2.9198L3.28805 7.34581L3.44938 7.81906ZM16.1746 2.97965L9.37348 9.78078L9.72704 10.1343L16.5282 3.3332L16.1746 2.97965ZM9.63993 9.72419L3.45838 7.34907L3.27905 7.8158L9.46059 10.1909L9.63993 9.72419ZM12.9648 16.5611L10.279 10.3434L9.82 10.5417L12.5058 16.7594L12.9648 16.5611ZM10.2263 10.6193L17.0671 3.77817L16.7135 3.42462L9.87272 10.2658L10.2263 10.6193ZM16.6521 3.52559L12.4971 16.5844L12.9735 16.736L17.1286 3.67719L16.6521 3.52559Z" />
  </svg>
)

PaperPlaneIcon.propTypes = {
  className: PropTypes.string,
}

const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.69067 2.55691C9.83963 2.33957 10.1604 2.33957 10.3093 2.55691L12.4575 5.69131C12.6688 5.99962 12.9799 6.22567 13.3384 6.33135L16.9832 7.40577C17.2359 7.48027 17.3351 7.78532 17.1744 7.99415L14.8572 11.0057C14.6293 11.302 14.5104 11.6677 14.5207 12.0413L14.6252 15.8398C14.6324 16.1031 14.3729 16.2917 14.1247 16.2034L10.5445 14.9303C10.1923 14.805 9.80771 14.805 9.45555 14.9303L5.87531 16.2034C5.62706 16.2917 5.36757 16.1031 5.37481 15.8398L5.47928 12.0413C5.48956 11.6677 5.37072 11.302 5.14279 11.0057L2.82562 7.99415C2.66494 7.78532 2.76406 7.48027 3.01679 7.40577L6.66159 6.33135C7.02011 6.22567 7.33123 5.99962 7.54253 5.69131L9.69067 2.55691Z" />
  </svg>
)

StarIcon.propTypes = {
  className: PropTypes.string,
}

const HeartIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <path d="M31.8088 15.0585C31.4629 11.0572 28.7685 8.15429 25.3965 8.15429C23.15 8.15429 21.0931 9.42496 19.9357 11.4615C18.7888 9.39862 16.8161 8.15381 14.6057 8.15381C11.2341 8.15381 8.53924 11.0568 8.19383 15.058C8.16649 15.2347 8.0544 16.1648 8.39524 17.6817C8.88646 19.8696 10.0211 21.8596 11.6757 23.4354L19.9302 31.309L28.3265 23.4359C29.9811 21.8596 31.1157 19.8701 31.6069 17.6817C31.9478 16.1653 31.8357 15.2352 31.8088 15.0585Z" fill="#F44336" />
    </g>
    <defs>
      <filter id="filter0_d" x="-2" y="-2" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx="8" dy="8" />
        <feGaussianBlur stdDeviation="8" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.191267 0 0 0 0 0.000399306 0 0 0 0 0.0345546 0 0 0 0.16 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
)

HeartIcon.propTypes = {
  className: PropTypes.string,
}

const SunflowerIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <path d="M21.3281 8.60963C21.7093 8.26378 22.2907 8.26378 22.6719 8.60963L25.5281 11.201C25.722 11.3769 25.9772 11.4698 26.2388 11.4596L30.0924 11.3105C30.6068 11.2906 31.0522 11.6643 31.1219 12.1743L31.6442 15.9953C31.6796 16.2547 31.8154 16.4898 32.0223 16.6502L35.0703 19.0131C35.4771 19.3284 35.578 19.901 35.3036 20.3365L33.2476 23.5993C33.108 23.8208 33.0609 24.0882 33.1163 24.344L33.9324 28.1133C34.0413 28.6163 33.7505 29.1199 33.2604 29.2771L29.5881 30.455C29.3389 30.5349 29.1309 30.7094 29.0088 30.941L27.2112 34.353C26.9713 34.8084 26.4249 35.0073 25.9484 34.8126L22.3781 33.3544C22.1358 33.2554 21.8642 33.2554 21.6219 33.3544L18.0516 34.8126C17.5751 35.0073 17.0287 34.8084 16.7888 34.353L14.9912 30.941C14.8691 30.7094 14.6611 30.5349 14.4119 30.455L10.7396 29.2771C10.2495 29.1199 9.95872 28.6163 10.0676 28.1133L10.8837 24.344C10.9391 24.0882 10.892 23.8208 10.7524 23.5993L8.69638 20.3365C8.42198 19.901 8.52295 19.3284 8.92974 19.0131L11.9777 16.6502C12.1846 16.4898 12.3204 16.2547 12.3558 15.9953L12.8781 12.1743C12.9478 11.6643 13.3932 11.2906 13.9076 11.3105L17.7612 11.4596C18.0228 11.4698 18.278 11.3769 18.4719 11.201L21.3281 8.60963Z" fill="#FFD94A" />
      <circle cx="22" cy="22" r="8" fill="#FFC107" />
    </g>
    <defs>
      <filter id="filter0_d" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx="8" dy="8" />
        <feGaussianBlur stdDeviation="8" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.191267 0 0 0 0 0.000399306 0 0 0 0 0.0345546 0 0 0 0.16 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
)

SunflowerIcon.propTypes = {
  className: PropTypes.string,
}

const TwitterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.7455 5.5123C17.39 5.66628 17.021 5.78776 16.6423 5.8757C17.0596 5.48841 17.3733 5.004 17.5503 4.4633C17.6008 4.30895 17.4292 4.17547 17.2865 4.25812C16.7597 4.56333 16.1922 4.79229 15.5999 4.93873C15.5655 4.94722 15.5301 4.95153 15.4945 4.95153C15.3866 4.95153 15.2817 4.9124 15.1992 4.84137C14.5689 4.29881 13.7584 4 12.9168 4C12.5526 4 12.185 4.05544 11.824 4.1648C10.7055 4.50366 9.84249 5.40485 9.57172 6.51672C9.47014 6.93377 9.44264 7.35119 9.48992 7.75738C9.49534 7.80406 9.47275 7.83664 9.45883 7.85192C9.43437 7.8787 9.39969 7.89406 9.36368 7.89406C9.35966 7.89406 9.35553 7.89387 9.35143 7.89349C6.90311 7.6713 4.69532 6.51916 3.13474 4.64933C3.05516 4.55395 2.90255 4.56565 2.83912 4.67192C2.53352 5.18404 2.37202 5.76977 2.37202 6.36579C2.37202 7.27922 2.74772 8.14002 3.40032 8.76755C3.12588 8.70399 2.86027 8.6039 2.61353 8.47004C2.49416 8.40526 2.34729 8.48852 2.34561 8.62188C2.32853 9.97883 3.14188 11.1863 4.3603 11.73C4.33577 11.7305 4.31123 11.7308 4.28665 11.7308C4.09352 11.7308 3.89796 11.7126 3.70549 11.6767C3.57106 11.6516 3.45813 11.7762 3.49987 11.9035C3.89535 13.1095 4.95844 13.9984 6.23062 14.2003C5.17479 14.8926 3.94524 15.2578 2.66553 15.2578L2.26658 15.2575C2.14366 15.2575 2.0397 15.3358 2.00837 15.4521C1.97752 15.5666 2.03435 15.6875 2.13917 15.747C3.5812 16.5668 5.22605 17 6.8966 17C8.35887 17 9.72671 16.7165 10.9621 16.1576C12.0947 15.6451 13.0955 14.9126 13.9368 13.9803C14.7205 13.1118 15.3334 12.1093 15.7583 11.0005C16.1633 9.94363 16.3774 8.81591 16.3774 7.73924V7.68796C16.3773 7.51508 16.4574 7.35241 16.597 7.24168C17.127 6.8214 17.5885 6.32666 17.9686 5.77122C18.069 5.62456 17.9107 5.44074 17.7455 5.5123Z" fill="white" />
  </svg>
)

TwitterIcon.propTypes = {
  className: PropTypes.string,
}

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.3255 11.5834V17H14.1853V11.9461C14.1853 10.6766 13.7311 9.81015 12.5945 9.81015C11.7268 9.81015 11.2104 10.3941 10.9833 10.9589C10.9004 11.1608 10.8791 11.4419 10.8791 11.7245V17H7.73784C7.73784 17 7.78014 8.44044 7.73784 7.55361H10.8788V8.89259C10.8724 8.90261 10.8641 8.91341 10.8581 8.92311H10.8788V8.89259C11.2961 8.24986 12.0414 7.33169 13.7095 7.33169C15.7762 7.33166 17.3255 8.68181 17.3255 11.5834ZM4.45195 3C3.37733 3 2.67444 3.70487 2.67444 4.63179C2.67444 5.53851 3.35699 6.26477 4.41026 6.26477H4.43124C5.52667 6.26477 6.20793 5.53865 6.20793 4.63179C6.18729 3.70487 5.52667 3 4.45195 3ZM2.861 17H6.00107V7.55361H2.861V17Z" fill="white" />
  </svg>
)

LinkedinIcon.propTypes = {
  className: PropTypes.string,
}

const QuestionIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1C4.58862 1 1 4.58862 1 9C1 13.4114 4.58862 17 9 17C13.4114 17 17 13.4114 17 9C17 4.58862 13.4114 1 9 1ZM9 16.3846C4.92831 16.3846 1.61538 13.0717 1.61538 9C1.61538 4.92831 4.92831 1.61538 9 1.61538C13.0717 1.61538 16.3846 4.92831 16.3846 9C16.3846 13.0717 13.0717 16.3846 9 16.3846Z" fill="white" stroke="white" strokeWidth="0.5" />
    <path d="M8.99997 12.3848C8.82981 12.3848 8.69228 12.5223 8.69228 12.6925V13.3078C8.69228 13.478 8.82981 13.6155 8.99997 13.6155C9.17012 13.6155 9.30766 13.478 9.30766 13.3078V12.6925C9.30766 12.5223 9.17012 12.3848 8.99997 12.3848Z" fill="white" stroke="white" strokeWidth="0.5" />
    <path d="M9.03472 3.76935C9.02302 3.76935 9.01133 3.76904 8.99933 3.76904C8.34825 3.76904 7.73594 4.01981 7.27164 4.47797C6.79902 4.94412 6.53841 5.56658 6.53841 6.23058C6.53841 6.40074 6.67594 6.53827 6.8461 6.53827C7.01625 6.53827 7.15379 6.40074 7.15379 6.23058C7.15379 5.73274 7.34918 5.26566 7.70364 4.91612C8.05841 4.56627 8.53071 4.37304 9.02641 4.38474C9.99902 4.39827 10.8323 5.2315 10.8458 6.20412C10.8547 6.84535 10.5384 7.4355 9.99933 7.7832C9.18087 8.3112 8.69225 9.24412 8.69225 10.2792V11.1537C8.69225 11.3238 8.82979 11.4614 8.99995 11.4614C9.1701 11.4614 9.30764 11.3238 9.30764 11.1537V10.2792C9.30764 9.46627 9.70025 8.70843 10.3329 8.30012C11.0513 7.83674 11.4732 7.04997 11.4612 6.1955C11.4427 4.87643 10.3541 3.78781 9.03472 3.76935Z" fill="white" stroke="white" strokeWidth="0.5" />
  </svg>
)

QuestionIcon.propTypes = {
  className: PropTypes.string,
}

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="white" stroke="white" strokeWidth="0.5" />
  </svg>
)

GithubIcon.propTypes = {
  className: PropTypes.string,
}

export {
  UpArrowIcon,
  MessageIcon,
  InfoIcon,
  InfoOIcon,
  CloseIcon,
  BackArrowIcon,
  LinkIcon,
  TransIcon,
  CopyIcon,
  PaperPlaneIcon,
  StarIcon,
  HeartIcon,
  SunflowerIcon,
  TwitterIcon,
  LinkedinIcon,
  QuestionIcon,
  GithubIcon
}
