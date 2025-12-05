-- 修复orders表缺失的estimated_delivery_time字段
ALTER TABLE `deliver_management`.`orders` 
ADD COLUMN `estimated_delivery_time` DATETIME DEFAULT NULL COMMENT '预计送达时间' AFTER `cancel_time`;
