import React, { FC } from 'react'
import cx from 'classnames'
import { Column } from '../types'

export const Cell: FC<{
  gutter: boolean
  stickyRight: boolean
  disabled?: boolean
  column: Column<any, any, any>
  className: string
  active?: boolean
  children?: any
  onClick?: () => any
  key?: any,
  tempData?: any
}> = ({
  children,
  gutter,
  stickyRight,
  column,
  active,
  disabled,
  className,
  onClick,
  key,
  tempData
}) => {
  // console.log("Temp data => ", tempData)
  return (
    <div
      id={`metadata-${column?.projectPropertyId}-${tempData?.uploadId}`}
      className={cx(
        'dsg-cell',
        gutter && 'dsg-cell-gutter',
        disabled && 'dsg-cell-disabled',
        gutter && active && 'dsg-cell-gutter-active',
        stickyRight && 'dsg-cell-sticky-right',
        className
      )}
      style={{
        flex: String(column.width),
        minWidth: column.minWidth,
        maxWidth: column.maxWidth,
      }}
      onClick={() => onClick ? onClick() : {}}
    >
      {children}
    </div>
  )
}
